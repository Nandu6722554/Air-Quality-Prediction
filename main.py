from flask import Flask, request, jsonify, send_from_directory  # type: ignore[import-untyped]
from flask_cors import CORS  # type: ignore[import-untyped]
import numpy as np  # type: ignore[import-untyped]
import pandas as pd  # type: ignore[import-untyped]
from sklearn.ensemble import RandomForestRegressor  # type: ignore[import-untyped]
from statsmodels.tsa.arima.model import ARIMA  # type: ignore[import-untyped]
from typing import Any
import xml.etree.ElementTree as ET
import urllib.request
import urllib.parse
from typing import Any
from itertools import islice

app = Flask(__name__, static_folder=".", static_url_path="")
CORS(app)

@app.route("/")
def index():  # type: ignore[return]
    return send_from_directory(".", "index.html")

# ==========================================
# 1. RANDOM FOREST MODEL (Predict AQI based on Pollutants)
# ==========================================

np.random.seed(42)
n_samples: int = 1000
pm25: np.ndarray = np.random.uniform(10, 250, n_samples)
pm10: np.ndarray = np.random.uniform(20, 300, n_samples)
no2: np.ndarray = np.random.uniform(10, 150, n_samples)
o3: np.ndarray = np.random.uniform(10, 120, n_samples)

aqi: np.ndarray = (
    0.6 * pm25 + 0.3 * pm10 + 0.05 * no2 + 0.05 * o3
    + np.random.normal(0, 10, n_samples)
)

X: pd.DataFrame = pd.DataFrame({"pm25": pm25, "pm10": pm10, "no2": no2, "o3": o3})
y: np.ndarray = aqi

rf_model: RandomForestRegressor = RandomForestRegressor(n_estimators=100, random_state=42)
rf_model.fit(X, y)

@app.route("/predict_aqi", methods=["POST"])
def predict_aqi() -> Any:
    """
    Predicts the current AQI based on raw pollutant values using the Random Forest Model.
    """
    data: dict[str, Any] = request.json or {}
    features = pd.DataFrame([{
        "pm25": float(data.get("pm25", 0)),
        "pm10": float(data.get("pm10", 0)),
        "no2":  float(data.get("no2",  0)),
        "o3":   float(data.get("o3",   0)),
    }])
    predicted_aqi: float = round(float(rf_model.predict(features)[0]), 2)  # type: ignore[call-overload]
    return jsonify({"predicted_aqi": predicted_aqi})


# ==========================================
# 2. ARIMA MODEL (Time-Series Forecasting for future AQI)
# ==========================================

date_rng = pd.date_range(start="2023-01-01", end="2023-12-31", freq="D")
time_series_aqi: np.ndarray = (
    150
    + 50 * np.sin(np.linspace(0, 3.14 * 2, len(date_rng)))
    + np.random.normal(0, 15, len(date_rng))
)
ts_data: pd.Series = pd.Series(time_series_aqi, index=date_rng)


@app.route("/forecast_aqi", methods=["GET"])
def forecast_aqi() -> Any:
    """
    Forecasts the AQI for the next 'days' using the ARIMA model based on past trends.
    """
    days: int = request.args.get("days", default=7, type=int)  # type: ignore[assignment]

    arima_model = ARIMA(ts_data, order=(1, 1, 1))
    arima_result = arima_model.fit()
    forecast_values = arima_result.forecast(steps=days)

    forecast_list: list[float] = []
    for val in forecast_values:
        v: float = round(float(val), 2)  # type: ignore[call-overload]
        forecast_list.append(max(0.0, v))

    return jsonify({"forecast": forecast_list})

# ==========================================
# 3. NEWS FEED (Google News RSS for Air Pollution India)
# ==========================================
@app.route("/news", methods=["GET"])
def get_news() -> Any:
    """
    Fetches the latest news on air pollution in India from Google News RSS.
    """
    query: str = urllib.parse.quote("air pollution India OR Indian government pollution control OR AQI India")
    url: str = f"https://news.google.com/rss/search?q={query}&hl=en-IN&gl=IN&ceid=IN:en"
    
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            xml_data = response.read()
            
        root = ET.fromstring(xml_data)
        news_items = []
        import re
        for item in islice(root.findall('.//item'), 9):
            title_elem = item.find('title')
            title = title_elem.text if title_elem is not None and title_elem.text else ""
            link_elem = item.find('link')
            link = link_elem.text if link_elem is not None and link_elem.text else ""
            pub_date_elem = item.find('pubDate')
            pub_date = pub_date_elem.text if pub_date_elem is not None and pub_date_elem.text else ""
            desc_elem = item.find('description')
            desc = desc_elem.text if desc_elem is not None and desc_elem.text else ""
            
            # Parse img src from description if it exists
            thumbnail = ""
            img_match = re.search(r'<img[^>]+src="([^">]+)"', desc)
            if img_match:
                thumbnail = img_match.group(1)
            
            # Simple cleanup of title: remove source name at the end
            clean_title = title.rsplit(' - ', 1)[0]
            
            news_items.append({
                "title": clean_title,
                "link": link,
                "pubDate": pub_date,
                "thumbnail": thumbnail
            })
            
        return jsonify({"news": news_items})
    except Exception as e:
        print(f"Error fetching news: {e}")
        return jsonify({"news": [], "error": str(e)})


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=8000, debug=False)
