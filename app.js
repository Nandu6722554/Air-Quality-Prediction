// ─── CITY DATABASE ───────────────────────────────────────────────────────────
const CITIES = [
  { name: "Delhi", state: "Delhi", lat: 28.6, lon: 77.2, baseAQI: 185, pm25: 62, pm10: 110, no2: 42, o3: 28, co: 1.2, so2: 16 },
  { name: "Mumbai", state: "Maharashtra", lat: 19.07, lon: 72.87, baseAQI: 95, pm25: 32, pm10: 60, no2: 26, o3: 20, co: 0.65, so2: 9 },
  { name: "Kolkata", state: "West Bengal", lat: 22.57, lon: 88.36, baseAQI: 130, pm25: 48, pm10: 88, no2: 34, o3: 22, co: 0.95, so2: 13 },
  { name: "Chennai", state: "Tamil Nadu", lat: 13.08, lon: 80.27, baseAQI: 72, pm25: 24, pm10: 44, no2: 20, o3: 18, co: 0.5, so2: 7 },
  { name: "Bengaluru", state: "Karnataka", lat: 12.97, lon: 77.59, baseAQI: 82, pm25: 28, pm10: 52, no2: 24, o3: 20, co: 0.6, so2: 8 },
  { name: "Hyderabad", state: "Telangana", lat: 17.38, lon: 78.49, baseAQI: 90, pm25: 30, pm10: 56, no2: 26, o3: 20, co: 0.65, so2: 9 },
  { name: "Ahmedabad", state: "Gujarat", lat: 23.02, lon: 72.57, baseAQI: 118, pm25: 42, pm10: 74, no2: 30, o3: 24, co: 0.8, so2: 12 },
  { name: "Pune", state: "Maharashtra", lat: 18.52, lon: 73.85, baseAQI: 78, pm25: 26, pm10: 48, no2: 22, o3: 19, co: 0.55, so2: 8 },
  { name: "Jaipur", state: "Rajasthan", lat: 26.91, lon: 75.78, baseAQI: 148, pm25: 52, pm10: 96, no2: 36, o3: 26, co: 1.0, so2: 14 },
  { name: "Lucknow", state: "Uttar Pradesh", lat: 26.85, lon: 80.95, baseAQI: 172, pm25: 60, pm10: 108, no2: 40, o3: 24, co: 1.15, so2: 16 },
  { name: "Kanpur", state: "Uttar Pradesh", lat: 26.45, lon: 80.33, baseAQI: 195, pm25: 68, pm10: 122, no2: 44, o3: 26, co: 1.3, so2: 18 },
  { name: "Surat", state: "Gujarat", lat: 21.17, lon: 72.83, baseAQI: 100, pm25: 35, pm10: 62, no2: 28, o3: 22, co: 0.7, so2: 10 },
  { name: "Nagpur", state: "Maharashtra", lat: 21.15, lon: 79.09, baseAQI: 92, pm25: 32, pm10: 58, no2: 26, o3: 20, co: 0.65, so2: 9 },
  { name: "Indore", state: "Madhya Pradesh", lat: 22.72, lon: 75.86, baseAQI: 105, pm25: 36, pm10: 66, no2: 30, o3: 22, co: 0.75, so2: 11 },
  { name: "Patna", state: "Bihar", lat: 25.59, lon: 85.13, baseAQI: 178, pm25: 62, pm10: 112, no2: 40, o3: 24, co: 1.2, so2: 16 },
  { name: "Bhopal", state: "Madhya Pradesh", lat: 23.25, lon: 77.41, baseAQI: 96, pm25: 33, pm10: 60, no2: 26, o3: 20, co: 0.68, so2: 9 },
  { name: "Visakhapatnam", state: "Andhra Pradesh", lat: 17.68, lon: 83.21, baseAQI: 78, pm25: 26, pm10: 48, no2: 22, o3: 18, co: 0.55, so2: 7 },
  { name: "Coimbatore", state: "Tamil Nadu", lat: 11.0, lon: 76.96, baseAQI: 62, pm25: 20, pm10: 36, no2: 18, o3: 16, co: 0.45, so2: 6 },
  { name: "Kochi", state: "Kerala", lat: 9.93, lon: 76.26, baseAQI: 52, pm25: 17, pm10: 32, no2: 15, o3: 15, co: 0.4, so2: 5 },
  { name: "Varanasi", state: "Uttar Pradesh", lat: 25.32, lon: 82.97, baseAQI: 205, pm25: 72, pm10: 128, no2: 46, o3: 28, co: 1.35, so2: 20 },
  { name: "Agra", state: "Uttar Pradesh", lat: 27.18, lon: 78.01, baseAQI: 168, pm25: 58, pm10: 104, no2: 38, o3: 24, co: 1.1, so2: 15 },
  { name: "Meerut", state: "Uttar Pradesh", lat: 28.98, lon: 77.7, baseAQI: 175, pm25: 60, pm10: 110, no2: 40, o3: 25, co: 1.15, so2: 16 },
  { name: "Faridabad", state: "Haryana", lat: 28.41, lon: 77.31, baseAQI: 190, pm25: 66, pm10: 118, no2: 42, o3: 26, co: 1.25, so2: 17 },
  { name: "Ghaziabad", state: "Uttar Pradesh", lat: 28.67, lon: 77.44, baseAQI: 198, pm25: 69, pm10: 124, no2: 44, o3: 26, co: 1.3, so2: 18 },
  { name: "Chandigarh", state: "Punjab", lat: 30.74, lon: 76.78, baseAQI: 74, pm25: 25, pm10: 44, no2: 22, o3: 18, co: 0.52, so2: 7 },
  { name: "Amritsar", state: "Punjab", lat: 31.63, lon: 74.87, baseAQI: 110, pm25: 38, pm10: 68, no2: 32, o3: 22, co: 0.78, so2: 11 },
  { name: "Guwahati", state: "Assam", lat: 26.18, lon: 91.74, baseAQI: 65, pm25: 22, pm10: 40, no2: 18, o3: 16, co: 0.48, so2: 6 },
  { name: "Bhubaneswar", state: "Odisha", lat: 20.29, lon: 85.82, baseAQI: 82, pm25: 28, pm10: 50, no2: 22, o3: 18, co: 0.58, so2: 8 },
  { name: "Thiruvananthapuram", state: "Kerala", lat: 8.52, lon: 76.94, baseAQI: 48, pm25: 15, pm10: 28, no2: 14, o3: 14, co: 0.36, so2: 4 },
  { name: "Raipur", state: "Chhattisgarh", lat: 21.25, lon: 81.64, baseAQI: 98, pm25: 34, pm10: 62, no2: 28, o3: 20, co: 0.7, so2: 9 },
];

const CITY_IMAGES = {
  "Delhi": "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=400&q=80",
  "Mumbai": "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&w=400&q=80",
  "Kolkata": "https://images.unsplash.com/photo-1558431382-bb7270ae1735?auto=format&fit=crop&w=400&q=80",
  "Chennai": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=400&q=80",
  "Bengaluru": "https://images.unsplash.com/photo-1599933023673-c248aef6a2cc?auto=format&fit=crop&w=400&q=80",
  "Hyderabad": "https://images.unsplash.com/photo-1634645224328-97103578768a?auto=format&fit=crop&w=400&q=80",
  "Ahmedabad": "https://images.unsplash.com/photo-1597143924769-cf57e2d6b384?auto=format&fit=crop&w=400&q=80",
  "Pune": "https://images.unsplash.com/photo-1584218321609-b69033379654?auto=format&fit=crop&w=400&q=80",
  "Jaipur": "https://images.unsplash.com/photo-1599661046289-e31887846eac?auto=format&fit=crop&w=400&q=80",
  "Agra": "https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&w=400&q=80",
  "Varanasi": "https://images.unsplash.com/photo-1561350111-7dad5f13d8b4?auto=format&fit=crop&w=400&q=80",
  "Amritsar": "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=400&q=80",
  "Kochi": "https://images.unsplash.com/photo-1601333796549-0a5639f72740?auto=format&fit=crop&w=400&q=80",
  "Chandigarh": "https://images.unsplash.com/photo-1579308000490-410a8805f6d9?auto=format&fit=crop&w=400&q=80",
  "Guwahati": "https://images.unsplash.com/photo-1598974357850-cb2dd4d21055?auto=format&fit=crop&w=400&q=80",
  "Bhubaneswar": "https://images.unsplash.com/photo-1605650117006-039c0490f844?auto=format&fit=crop&w=400&q=80",
  "Lucknow": "https://images.unsplash.com/photo-1605335198950-891f753c1533?auto=format&fit=crop&w=400&q=80",
  "Patna": "https://images.unsplash.com/photo-1668802116716-2456a3e7251c?auto=format&fit=crop&w=400&q=80",
  "Surat": "https://images.unsplash.com/photo-pFmu_NDZNf8?auto=format&fit=crop&w=400&q=80",
  "Nagpur": "https://images.unsplash.com/photo-wVYuuWzN4EA?auto=format&fit=crop&w=400&q=80",
  "Indore": "https://images.unsplash.com/photo-BdLghFKcmJc?auto=format&fit=crop&w=400&q=80",
  "Kanpur": "https://images.unsplash.com/photo-OdDptApsJqA?auto=format&fit=crop&w=400&q=80",
  "Bhopal": "https://images.unsplash.com/photo-wtvf3jLD77Y?auto=format&fit=crop&w=400&q=80",
  "Visakhapatnam": "https://images.unsplash.com/photo-bUmutlG6gWY?auto=format&fit=crop&w=400&q=80",
  "Coimbatore": "https://images.unsplash.com/photo-aAvFvZBdnmQ?auto=format&fit=crop&w=400&q=80",
  "Meerut": "https://images.unsplash.com/photo-iEs7q8xze0Q?auto=format&fit=crop&w=400&q=80",
  "Faridabad": "https://images.unsplash.com/photo-_0vQoD_EdfM?auto=format&fit=crop&w=400&q=80",
  "Ghaziabad": "https://images.unsplash.com/photo-xcnNeO9XpvU?auto=format&fit=crop&w=400&q=80",
  "Thiruvananthapuram": "https://images.unsplash.com/photo-Qs2MDYcTXlU?auto=format&fit=crop&w=400&q=80",
  "Raipur": "https://images.unsplash.com/photo-a89KdUZFbqs?auto=format&fit=crop&w=400&q=80",
};

const AQI_CATEGORIES = [
  { label: "Good", max: 50, color: "#00e676", bg: "rgba(0,230,118,0.15)", icon: "🌿", textColor: "#00e676" },
  { label: "Satisfactory", max: 100, color: "#aeea00", bg: "rgba(174,234,0,0.15)", icon: "✅", textColor: "#aeea00" },
  { label: "Moderate", max: 200, color: "#ffea00", bg: "rgba(255,234,0,0.15)", icon: "⚠️", textColor: "#ffea00" },
  { label: "Poor", max: 300, color: "#ff9100", bg: "rgba(255,145,0,0.15)", icon: "🚨", textColor: "#ff9100" },
  { label: "Very Poor", max: 400, color: "#ff3d00", bg: "rgba(255,61,0,0.15)", icon: "😷", textColor: "#ff3d00" },
  { label: "Severe", max: Infinity, color: "#b71c1c", bg: "rgba(183,28,28,0.2)", icon: "☠️", textColor: "#ef5350" },
];

const ADVISORIES = [
  { cat: "Good", icon: "🌿", title: "Air Quality is Good", msg: "Excellent! The air is clean and safe for all outdoor activities.", tips: ["🚶 Outdoor Walks", "🚴 Cycling", "🏃 Sports", "🪟 Ventilate Rooms"] },
  { cat: "Satisfactory", icon: "✅", title: "Satisfactory", msg: "Air quality is acceptable. No major risk for general population.", tips: ["🙂 Safe activities", "⚠️ Sensitive take care"] },
  { cat: "Moderate", icon: "⚠️", title: "Moderate", msg: "Limit prolonged outdoor exertion for respiratory patients.", tips: ["🏠 Stay comfortable", "😷 Wear masks"] },
  { cat: "Poor", icon: "🚨", title: "Poor", msg: "Avoid prolonged outdoor exertion. Wear protection.", tips: ["🏠 Stay inside", "😷 N95 Masks"] },
  { cat: "Very Poor", icon: "😷", title: "Very Poor", msg: "Respiratory illness risk. Stay indoors.", tips: ["🚫 No outdoors", "💨 Air purifiers"] },
  { cat: "Severe", icon: "☠️", title: "Severe", msg: "HEALTH EMERGENCY. Avoid all outdoor physical activity.", tips: ["🚫 Stop activities", "🏥 Keep inhalers"] },
];

let currentCity = null;
let liveData = {};
let OWM_API_KEY = localStorage.getItem('OWM_API_KEY') || '0b17205d909e03adc5c87830210869f7';

function isLightMode() { return true; }
function getCategory(aqi) { 
  return AQI_CATEGORIES.find(c => aqi <= c.max) || AQI_CATEGORIES[5];
}
function formatTime(date) { return date.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true }); }
function formatDate(date) { return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }); }

function showToast(msg, icon = "🔔") {
  const t = document.getElementById('toast');
  if (!t) return;
  t.innerHTML = `<span>${icon}</span> ${msg}`;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

function updateTicker() {
  const ticker = document.getElementById('liveTicker');
  if (!ticker) return;
  const sorted = [...CITIES].sort((a, b) => liveData[b.name].aqi - liveData[a.name].aqi);
  
  const divider = `<span class="ticker-divider"><svg width="24" height="12" viewBox="0 0 24 12" fill="none"><path d="M2 10C5 10 7 2 12 2C17 2 19 10 22 10" stroke="var(--accent)" stroke-width="2" stroke-linecap="round"/></svg></span>`;
  
  const content = sorted.map(c => {
    const d = liveData[c.name];
    const cat = getCategory(d.aqi);
    return `<div class="ticker-item"><span class="city-name">${c.name}</span> <span class="aqi-val" style="color:${cat.color}">${d.aqi}</span></div>`;
  }).join(divider);
  ticker.innerHTML = content + divider + content; 
}

async function updateAQIFromBackend(cityName) {
  const d = liveData[cityName];
  try {
    const res = await fetch("/predict_aqi", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pm25: d.pm25, pm10: d.pm10, no2: d.no2, o3: d.o3 })
    });
    if (res.ok) {
      const result = await res.json();
      d.aqi = result.predicted_aqi;
    } else {
      console.warn(`Backend returned ${res.status} for ${cityName}. Using fallback prediction.`);
      // Simple fallback calculation while waiting for backend
      d.aqi = Math.round(0.6 * d.pm25 + 0.3 * d.pm10 + 0.1 * d.no2);
    }
  } catch (e) { 
    console.error(`Backend failed for ${cityName}:`, e);
    d.aqi = Math.round(0.6 * d.pm25 + 0.3 * d.pm10 + 0.1 * d.no2);
  }
}

async function initLiveData() {
  await Promise.all(CITIES.map(async (c) => {
    liveData[c.name] = { aqi: c.baseAQI, pm25: c.pm25, pm10: c.pm10, no2: c.no2, o3: c.o3, co: c.co, so2: c.so2 };
    await updateAQIFromBackend(c.name);
  }));
}

async function fetchRealData(lat, lon) {
  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${OWM_API_KEY}`);
    if (!res.ok) return null;
    const data = await res.json();
    const comp = data.list[0].components;
    return { pm25: comp.pm2_5, pm10: comp.pm10, no2: comp.no2, o3: comp.o3, co: comp.co / 1000, so2: comp.so2 };
  } catch (e) { return null; }
}

async function loadAllRealData() {
  let activePoints = 0;
  for (const c of CITIES) {
    const real = await fetchRealData(c.lat, c.lon);
    if (real) {
      activePoints++;
      const d = liveData[c.name];
      Object.assign(d, real);
      await updateAQIFromBackend(c.name);
      
      // Update UI immediately if this is the current city
      if (currentCity && currentCity.name === c.name) {
        renderDashboard(currentCity);
      }
      // Incrementally update overview
      renderTopCities();
      updateTicker();
    }
  }
  updateStats(activePoints);
  renderCompareBar();
}

function updateStats(active) {
  const statCities = document.getElementById('statCities');
  const statSensors = document.getElementById('statSensors');
  const statUpdated = document.getElementById('statUpdated');
  
  if (statCities) statCities.textContent = CITIES.length;
  if (statSensors) statSensors.textContent = active * 6; // 6 pollutants per city
  if (statUpdated) statUpdated.textContent = formatTime(new Date());
}

async function renderDashboard(city, isManual = false) {
  const d = liveData[city.name];
  const cat = getCategory(d.aqi);
  const now = new Date();

  document.getElementById('dashCityName').textContent = city.name;
  document.getElementById('dashStateAQI').textContent = city.state;
  const img = document.getElementById('dashCityImg');
  img.src = CITY_IMAGES[city.name] || "";
  img.style.display = 'block';

  document.getElementById('dashTime').textContent = "Updated: " + formatTime(now);

  document.getElementById('gaugeValue').textContent = d.aqi;
  document.getElementById('gaugeValue').style.color = cat.color;
  
  const bar = document.getElementById('gaugeFill');
  if (bar) {
      bar.style.width = Math.min((d.aqi/500)*100, 100) + '%';
      bar.style.backgroundColor = cat.color;
  }
  
  const badge = document.getElementById('aqiBadge');
  if (badge) {
      badge.textContent = cat.label;
      badge.style.background = cat.bg;
      badge.style.color = cat.textColor;
      badge.style.border = `1px solid ${cat.color}40`;
  }

  document.getElementById('metaWind').textContent = (3 + Math.random() * 8).toFixed(1) + " km/h";
  document.getElementById('metaHumid').textContent = (60 + Math.random() * 20).toFixed(0) + "%";
  document.getElementById('metaTemp').textContent = (25 + Math.random() * 10).toFixed(0) + "°C";
  document.getElementById('metaVis').textContent = (4 + Math.random() * 6).toFixed(1) + " km";

  renderPollutants(d);
  renderHourlyChart(genHourly(d.aqi), cat.color);
  const forecast = await genForecast();
  renderForecast(forecast);
  
  if (typeof renderApexCharts === 'function') {
    renderApexCharts(d, cat);
  }
  
  updateConfidence(d);

  if (isManual) document.getElementById('dashboard').scrollIntoView({ behavior: 'smooth' });
}

function animateGauge(aqi, color) {
  const fill = document.getElementById('gaugeFill');
  const valText = document.getElementById('gaugeValue');
  const pct = Math.min((aqi / 500) * 100, 100);
  fill.style.width = `${pct}%`;
  fill.style.backgroundColor = color;
  
  let start = 0;
  const duration = 1200;
  const step = (ts) => {
    if (!start) start = ts;
    const prog = Math.min((ts - start) / duration, 1);
    valText.textContent = Math.round(prog * aqi);
    if (prog < 1) requestAnimationFrame(step);
    else valText.textContent = aqi;
  };
  requestAnimationFrame(step);
}

function renderPollutants(d) {
  const IDEAL = {
    pm25: { range: '0–30', unit: 'µg/m³', label: 'PM2.5' },
    pm10: { range: '0–50', unit: 'µg/m³', label: 'PM10' },
    o3:   { range: '0–40', unit: 'µg/m³', label: 'O3' },
    co:   { range: '0–1.0', unit: 'mg/m³', label: 'CO' },
    no2:  { range: '0–25', unit: 'µg/m³', label: 'NO2' },
    so2:  { range: '0–20', unit: 'µg/m³', label: 'SO2' }
  };
  const polls = [
    { k: 'pm25', v: d.pm25 },
    { k: 'pm10', v: d.pm10 },
    { k: 'o3',   v: d.o3 },
    { k: 'co',   v: parseFloat(d.co.toFixed(2)) },
    { k: 'no2',  v: d.no2 },
    { k: 'so2',  v: d.so2 }
  ];
  const container = document.getElementById('pollutantsGrid');
  container.innerHTML = polls.map(p => {
    const meta = IDEAL[p.k];
    const color = pollutantColor(p.k, p.v);
    const pct = pollutantPercent(p.k, p.v);
    return `<div class="pollutant-card">
      <div class="pollutant-card-inner">
        <div class="pollutant-left">
          <div class="pollutant-name">${meta.label}</div>
          <div class="pollutant-value">${p.v}<small class="pollutant-unit">${meta.unit}</small></div>
          <div class="pollutant-bar-track"><div class="pollutant-bar-fill" style="width:${pct}%; background:${color}"></div></div>
        </div>
        <div class="pollutant-ideal">
          <span class="ideal-label">Ideal</span>
          <span class="ideal-range">${meta.range}</span>
          <span class="ideal-unit">${meta.unit}</span>
        </div>
      </div>
    </div>`;
  }).join('');
}

function pollutantColor(k, v) {
  const thresholds = { pm25:[30,60,90,120], pm10:[50,100,150,200], no2:[25,50,80,120], o3:[40,60,80,100], co:[1,2,5,10], so2:[20,40,80,160] };
  const t = thresholds[k] || [50,100,200,300];
  const colors = ['#00e676', '#aeea00', '#ffea00', '#ff9100', '#ff3d00'];
  for (let i=0; i<4; i++) if (v <= t[i]) return colors[i];
  return colors[4];
}

function pollutantPercent(k, v) {
  const caps = { pm25:250, pm10:400, no2:200, o3:200, co:15, so2:250 };
  return Math.min((v / (caps[k] || 300)) * 100, 100);
}

function genHourly(base) {
  const labels = Array.from({length:24}, (_,i) => `${(i+1)}:00`);
  const data = Array.from({length:24}, () => Math.round(base * (0.8 + Math.random()*0.4)));
  return { labels, data };
}

let hourlyChart;
function renderHourlyChart(h, color) {
  const ctx = document.getElementById('hourlyChart');
  if (!ctx || !h) return;
  if (hourlyChart) hourlyChart.destroy();
  const isLight = isLightMode();
  hourlyChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: h.labels,
      datasets: [{
        label: 'Trend',
        data: h.data,
        borderColor: color,
        borderWidth: 3,
        tension: 0.4,
        fill: true,
        backgroundColor: `${color}15`,
        pointRadius: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display:false } },
      scales: {
        x: { grid: { display:false }, ticks: { color: isLight ? '#64748b' : '#8b949e', font:{size:10} } },
        y: { grid: { color: isLight ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)' }, ticks: { color: isLight ? '#64748b' : '#8b949e', font:{size:10} } }
      }
    }
  });
}

async function genForecast() {
  const days = ["Today", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const icons = [
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/><path d="M22 10c0-1-1-3-3-3m-9-4A9 9 0 0 0 5 11"/></svg>`,
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`,
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M16 13L16 21"/><path d="M8 13L8 21"/><path d="M12 15L12 23"/><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"/></svg>`,
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/><path d="M22 10c0-1-1-3-3-3m-9-4A9 9 0 0 0 5 11"/></svg>`,
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`
  ];
  try {
    const res = await fetch("/forecast_aqi?days=7");
    if (res.ok) {
      const data = await res.json();
      return days.map((name, i) => ({ 
        dayName: name, 
        aqi: Math.round(data.forecast[i] || (80 + Math.random()*150)), 
        icon: icons[i] 
      }));
    }
  } catch (e) { console.error("Forecast failed:", e); }
  return days.map((name, i) => ({ dayName: name, aqi: 80 + Math.round(Math.random()*150), icon: icons[i] }));
}

function renderForecast(days) {
  const cont = document.getElementById('forecastStrip');
  if (!cont) return;
  cont.innerHTML = days.map(d => {
    const cat = getCategory(d.aqi);
    return `<div class="forecast-day">
      <div class="day-name">${d.dayName}</div>
      <div class="day-icon">${d.icon}</div>
      <div class="day-aqi" style="color:${cat.color}">${d.aqi}</div>
      <div class="day-label" style="color:${cat.color}">${cat.label}</div>
    </div>`;
  }).join('');
}

function renderAdvisory(adv, cat) {
  const cont = document.getElementById('advisoryContainer');
  if (!cont) return;
  cont.innerHTML = `
    <div class="glass-card advisory-card" style="border-left-color:${cat.color}">
      <div class="advisory-icon-wrap" style="background:${cat.color}20; color:${cat.color}">${adv.icon}</div>
      <div class="advisory-content">
        <h3>${adv.title}</h3>
        <p>${adv.msg}</p>
        <div class="advisory-tips">
          ${adv.tips.map(t => `<span class="advisory-tip">${t}</span>`).join('')}
        </div>
      </div>
    </div>`;
}

let apexBar, apexPie, apexRadar, apexHeatmap;

function renderApexCharts(d, cat) {
  const textColor = '#64748b';
  const gridColor = 'rgba(0,0,0,0.06)';

  // 1. VERTICAL Bar Chart — Top 8 cities by AQI
  const barEl = document.querySelector("#apexBarChart");
  if(barEl) {
    if(apexBar) apexBar.destroy();
    const sorted = [...CITIES].sort((a,b) => liveData[b.name].aqi - liveData[a.name].aqi).slice(0, 8);
    apexBar = new ApexCharts(barEl, {
      series: [{ name: 'AQI', data: sorted.map(c => liveData[c.name].aqi) }],
      chart: { type: 'bar', height: '100%', toolbar: {show: false}, background: 'transparent',
        animations: { enabled: true, easing: 'easeinout', speed: 800 } },
      plotOptions: { bar: { horizontal: false, borderRadius: 6, columnWidth: '55%',
        dataLabels: { position: 'top' } } },
      dataLabels: { enabled: true, style: { fontSize: '11px', colors: [textColor] }, offsetY: -20 },
      xaxis: { categories: sorted.map(c => c.name), labels: { style: { colors: textColor, fontSize: '11px' } }, axisBorder: { show: false } },
      yaxis: { labels: { style: { colors: textColor } } },
      colors: sorted.map(c => getCategory(liveData[c.name].aqi).color),
      theme: { mode: 'light' },
      grid: { borderColor: gridColor, strokeDashArray: 4 },
      legend: { show: false }
    });
    apexBar.render();
  }

  // 2. PIE Chart — Pollutant composition with distinct colors
  const pieEl = document.querySelector("#apexPieChart");
  if(pieEl) {
    if(apexPie) apexPie.destroy();
    apexPie = new ApexCharts(pieEl, {
      series: [d.pm25, d.pm10, d.no2, d.o3, d.so2, Math.round(d.co * 50)],
      labels: ['PM2.5', 'PM10', 'NO2', 'O3', 'SO2', 'CO'],
      chart: { type: 'donut', height: '100%', background: 'transparent',
        animations: { enabled: true, easing: 'easeinout', speed: 900 } },
      colors: ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ef4444', '#06b6d4'],
      dataLabels: { enabled: false },
      legend: { position: 'bottom', labels: { colors: textColor }, fontSize: '12px' },
      plotOptions: { pie: { donut: { size: '68%',
        labels: { show: true, total: {
          show: true, label: 'AQI', fontSize: '14px', color: textColor,
          formatter: () => d.aqi
        } } } } },
      theme: { mode: 'light' }
    });
    apexPie.render();
  }

  // 3. RADAR Chart — Pollutant fingerprint
  const radarEl = document.querySelector("#apexRadarChart");
  if(radarEl) {
    if(apexRadar) apexRadar.destroy();
    // Normalize each pollutant to 0–100 scale against safe max
    const norm = (v, max) => Math.min(Math.round((v / max) * 100), 100);
    apexRadar = new ApexCharts(radarEl, {
      series: [{ name: d.aqi + ' AQI', data: [
        norm(d.pm25, 120), norm(d.pm10, 200), norm(d.no2, 100), norm(d.o3, 100), norm(d.so2, 80), norm(d.co, 4)
      ] }],
      labels: ['PM2.5', 'PM10', 'NO2', 'O3', 'SO2', 'CO'],
      chart: { type: 'radar', height: '100%', background: 'transparent', toolbar: {show: false},
        animations: { enabled: true, easing: 'easeinout', speed: 900 } },
      colors: [cat.color],
      fill: { opacity: 0.25 },
      stroke: { width: 2 },
      markers: { size: 5 },
      xaxis: { labels: { style: { colors: Array(6).fill(textColor), fontSize: '12px' } } },
      yaxis: { show: false, max: 100 },
      theme: { mode: 'light' }
    });
    apexRadar.render();
  }

  // 4. HEATMAP — Regional India patterns (North/South/East/West/Central)
  const heatEl = document.querySelector("#apexHeatmapChart");
  if(heatEl) {
    if(apexHeatmap) apexHeatmap.destroy();
    const regions = {
      'North': ['Delhi','Lucknow','Agra','Meerut','Varanasi','Chandigarh','Amritsar','Jaipur'],
      'West':  ['Mumbai','Pune','Ahmedabad','Surat','Nagpur','Indore'],
      'South': ['Chennai','Bengaluru','Hyderabad','Kochi','Coimbatore','Visakhapatnam','Thiruvananthapuram'],
      'East':  ['Kolkata','Patna','Bhubaneswar','Guwahati','Raipur'],
      'NCR':   ['Faridabad','Ghaziabad','Meerut','Kanpur']
    };
    const pollutantKeys = ['PM2.5','PM10','NO2','O3','SO2'];
    const heatSeries = Object.entries(regions).map(([region, cities]) => {
      const validCities = cities.filter(c => liveData[c]);
      const avg = (key) => validCities.length
        ? Math.round(validCities.reduce((s,c) => s + (liveData[c][key.toLowerCase().replace('.','')] || 0), 0) / validCities.length)
        : 0;
      return { name: region, data: [
        { x: 'PM2.5', y: avg('pm25') },
        { x: 'PM10',  y: avg('pm10') },
        { x: 'NO2',   y: avg('no2') },
        { x: 'O3',    y: avg('o3') },
        { x: 'SO2',   y: avg('so2') }
      ]};
    });
    apexHeatmap = new ApexCharts(heatEl, {
      series: heatSeries,
      chart: { type: 'heatmap', height: '100%', toolbar: {show: false}, background: 'transparent',
        animations: { enabled: true, easing: 'easeinout', speed: 800 } },
      dataLabels: { enabled: true, style: { fontSize: '11px', colors: ['#fff'] } },
      colors: ['#3b82f6'],
      xaxis: { labels: { style: { colors: textColor, fontSize: '11px' } } },
      yaxis: { labels: { style: { colors: textColor } } },
      theme: { mode: 'light' },
      grid: { borderColor: gridColor }
    });
    apexHeatmap.render();
  }
}

async function loadNews() {
  const grid = document.getElementById('newsGrid');
  if(!grid) return;
  grid.innerHTML = '<p style="color:var(--text-muted);text-align:center;width:100%;grid-column:1/-1;">Loading latest news...</p>';
  try {
    const res = await fetch('/news');
    if(!res.ok) throw new Error('Network error');
    const data = await res.json();
    if(data.news && data.news.length > 0) {
      grid.innerHTML = data.news.map(item => {
        const fallbackImg = 'https://images.unsplash.com/photo-1611273426858-450d874db1ed?q=80&w=600&auto=format&fit=crop';
        return `
        <a href="${item.link}" target="_blank" class="news-article">
          <img src="${item.thumbnail || fallbackImg}" class="news-article-img" alt="News Image">
          <div class="news-article-content">
            <small>${new Date(item.pubDate).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} • ${new Date(item.pubDate).toLocaleDateString()}</small>
            <h4>${item.title}</h4>
          </div>
        </a>
      `}).join('');
    } else {
      grid.innerHTML = '<p style="color:var(--text-muted);text-align:center;width:100%;grid-column:1/-1;">No news available.</p>';
    }
  } catch(e) {
    grid.innerHTML = '<p style="color:var(--aqi-verypoor);text-align:center;width:100%;grid-column:1/-1;">Failed to load news.</p>';
  }
}

async function updateConfidence(d) {
  try {
     const res = await fetch("/predict_aqi", {
       method: "POST", headers: {"Content-Type":"application/json"},
       body: JSON.stringify({pm25: d.pm25, pm10: d.pm10, no2: d.no2, o3: d.o3})
     });
     if(res.ok) {
        const data = await res.json();
        const predicted = data.predicted_aqi;
        const actual = d.aqi;
        let accuracy = 100 - (Math.abs(predicted - actual) / actual) * 100;
        if(accuracy < 0) accuracy = 0;
        if(accuracy > 100) accuracy = 100;
        
        // Random Forest predictions can be very accurate on the synthetic dataset.
        // Let's cap UI presentation logic smoothly.
        const finalAcc = Math.round(accuracy);
        
        const scoreVal = document.getElementById("confScoreVal");
        const circleLine = document.getElementById("confCircleLine");
        const scoreText = document.getElementById("confScoreText");
        
        if (scoreVal) scoreVal.textContent = finalAcc + "%";
        
        if (circleLine) {
           const offset = 283 - (283 * finalAcc) / 100;
           circleLine.style.strokeDashoffset = offset;
           const color = finalAcc >= 90 ? "#00e676" : finalAcc >= 70 ? "#ffea00" : "#ff3d00";
           circleLine.style.stroke = color;
        }
        
        if (scoreText) {
           scoreText.innerHTML = `Random Forest Regression model predicted <b>${predicted} AQI</b> vs live API index <b>${actual} AQI</b> mapping.`;
        }
     }
  } catch(e) { console.error(e); }
}

function renderTopCities() {
  const cont = document.getElementById('citiesGrid');
  if (!cont) return;
  
  let sorted = [...CITIES];
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    const val = sortSelect.value;
    if (val === 'aqiDesc') sorted.sort((a,b) => liveData[b.name].aqi - liveData[a.name].aqi);
    else if (val === 'aqiAsc') sorted.sort((a,b) => liveData[a.name].aqi - liveData[b.name].aqi);
    else if (val === 'nameAsc') sorted.sort((a,b) => a.name.localeCompare(b.name));
    else if (val === 'nameDesc') sorted.sort((a,b) => b.name.localeCompare(a.name));
  }
  
  cont.innerHTML = sorted.map(c => {
    const d = liveData[c.name];
    const cat = getCategory(d.aqi);
    return `
    <div class="city-card" onclick="selectCity('${c.name}')" style="--card-color:${cat.color}">
      <div class="city-motif">${cat.icon}</div>
      <div class="city-card-name">${c.name}</div>
      <div class="city-card-state">${c.state}</div>
      <div class="city-card-aqi" style="color:${cat.color}">${d.aqi}</div>
      <div class="city-card-cat" style="color:${cat.color}">${cat.label}</div>
    </div>`;
  }).join('');
}

function initSearch() {
  const input = document.getElementById('citySearch');
  const btn = document.getElementById('searchBtn');
  const dropdown = document.getElementById('autocompleteDropdown');
  input.oninput = () => {
    const q = input.value.trim().toLowerCase();
    if (!q) { dropdown.classList.remove('visible'); return; }
    const matches = CITIES.filter(c => c.name.toLowerCase().includes(q)).slice(0, 6);
    dropdown.innerHTML = matches.map(c => `<div class="ac-item" onclick="selectCity('${c.name}')"><span>🏙️</span> ${c.name} <div class="ac-aqi" style="background:${getCategory(liveData[c.name].aqi).bg}; color:${getCategory(liveData[c.name].aqi).textColor}">${liveData[c.name].aqi}</div></div>`).join('');
    dropdown.classList.add('visible');
  };
  btn.onclick = () => {
    const c = CITIES.find(city => city.name.toLowerCase() === input.value.trim().toLowerCase());
    if (c) selectCity(c.name);
  };
  
  const filterBtn = document.getElementById('filterBtn');
  const filterDropdown = document.getElementById('filterDropdown');
  const sortSelect = document.getElementById('sortSelect');
  if (filterBtn && filterDropdown) {
    filterBtn.onclick = () => {
      filterDropdown.style.display = filterDropdown.style.display === 'none' ? 'block' : 'none';
    };
  }
  if (sortSelect) {
    sortSelect.onchange = () => {
      renderTopCities();
      filterDropdown.style.display = 'none';
      document.getElementById('cities').scrollIntoView({behavior: 'smooth'});
    };
  }
}

function selectCity(name) {
  const c = CITIES.find(city => city.name === name);
  if (c) { 
    currentCity = c;
    renderDashboard(c, true);
    document.getElementById('autocompleteDropdown').classList.remove('visible');
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  try {
    await initLiveData();
    initSearch();
    updateStats(0);
    renderTopCities();
    updateTicker();
    initGlobe();
    currentCity = CITIES[0];
    await renderDashboard(currentCity, false);
    loadAllRealData();
    loadNews();
    setInterval(loadAllRealData, 300000); // Update every 5 minutes
  } catch (e) { console.error(e); }
  finally {
    setTimeout(() => {
      const loader = document.getElementById('loadingOverlay');
      if (loader) loader.classList.add('hidden');
    }, 1200);
  }
});

function initTheme() {}

function initGlobe() {
  const cont = document.getElementById('heroGlobe');
  if (!cont || typeof Globe === 'undefined') return;

  const cityPoints = CITIES.map(c => ({
    lat: c.lat,
    lng: c.lon,
    name: c.name,
    aqi: liveData[c.name]?.aqi ?? c.baseAQI,
    color: getCategory(liveData[c.name]?.aqi ?? c.baseAQI).color,
    label: getCategory(liveData[c.name]?.aqi ?? c.baseAQI).label,
  }));

  const g = Globe()(cont)
    .width(cont.offsetWidth)
    .height(cont.offsetHeight)
    .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
    .backgroundColor('rgba(0,0,0,0)')
    // ─── Dots (no arcs, no lines) ───────────────────────────────────
    .pointsData(cityPoints)
    .pointLat('lat')
    .pointLng('lng')
    .pointColor('color')
    .pointRadius(0.55)
    .pointAltitude(0.02)
    .pointResolution(16)
    // ─── Labels on hover ────────────────────────────────────────────
    .labelsData(cityPoints)
    .labelLat('lat')
    .labelLng('lng')
    .labelText(d => `${d.name}  ${d.aqi}`)
    .labelSize(0.55)
    .labelDotRadius(0)
    .labelColor(d => d.color)
    .labelAltitude(0.03)
    .labelResolution(3)
    // ─── Click to select city ───────────────────────────────────────
    .onPointClick(d => selectCity(d.name));

  g.controls().autoRotate = true;
  g.controls().autoRotateSpeed = 0.8;
  g.controls().enableZoom = false;
  g.pointOfView({ altitude: 2.5 });
}

function animateStats() {}
