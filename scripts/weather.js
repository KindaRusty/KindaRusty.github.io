function showWeatherData(msg) {
  const weatherPopup = document.getElementById('weather-data-popup');
  if (weatherPopup) {
    weatherPopup.innerHTML = msg;
    weatherPopup.style.display = 'block';
  }
}

function initWeather() {
  const weatherIcon = document.getElementById('weather-icon-widget');
  const weatherPopup = document.getElementById('weather-data-popup');

  if (!weatherIcon || !weatherPopup) return;

  weatherIcon.addEventListener('click', () => {
    const isVisible = weatherPopup.style.display === 'block';
    weatherPopup.style.display = isVisible ? 'none' : 'block';
  });

  // Hide popup if clicked outside
  document.addEventListener('click', function(event) {
    if (!weatherPopup.contains(event.target) && !weatherIcon.contains(event.target)) {
        weatherPopup.style.display = 'none';
    }
  });

  if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(function(pos) {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;

      // Lấy địa chỉ từ lat/lon
      fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`)
        .then(res => res.json())
        .then(locationData => {
          const address = locationData.address;
          // Ưu tiên lấy tên phường/xã, thành phố
          const ward = address.suburb || address.village || address.town || address.hamlet || address.neighbourhood || '';
          const city = address.city || address.town || address.village || address.state || address.county || '';
          const locationStr = `<div style="font-size:0.98em;color:#555;margin-bottom:2px;">
            <i class="fas fa-map-marker-alt" style="color:#19b86e"></i>
            ${ward ? ward + ', ' : ''}${city}
          </div>`;

          // Sau khi có địa chỉ, lấy thời tiết
          fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m,relative_humidity_2m,weather_code`)
            .then(res => res.json())
            .then(data => {
              const temp = data.current.temperature_2m;
              const wind = data.current.wind_speed_10m;
              const humidity = data.current.relative_humidity_2m;
              let icon = '';
              if (humidity > 85) {
                icon = 'https://cdn-icons-png.flaticon.com/128/1163/1163624.png'; // Rainy
              } else if (temp >= 30) {
                icon = 'https://cdn-icons-png.flaticon.com/128/869/869869.png'; // Sunny
              } else if (temp <= 18) {
                icon = 'https://cdn-icons-png.flaticon.com/128/414/414927.png'; // Cloudy
              } else {
                icon = 'https://cdn-icons-png.flaticon.com/128/1163/1163661.png'; // Default weather
              }
              showWeatherData(`
                ${locationStr}
                <div style="display:flex;align-items:center;gap:12px;">
                  <img src="${icon}" alt="weather icon" style="width:40px;height:40px;">
                  <div>
                    <strong>Thời tiết hiện tại</strong><br>
                    Nhiệt độ: <b>${temp}°C</b><br>
                    Gió: <b>${wind} km/h</b><br>
                    Độ ẩm: <b>${humidity}%</b>
                  </div>
                </div>
              `);
            })
            .catch(() => {
              showWeatherData('Không lấy được thời tiết');
            });
        })
        .catch(() => {
          showWeatherData('Không lấy được vị trí địa chỉ');
        });
    }, function() {
      showWeatherData('Không lấy được vị trí thiết bị');
    });
  } else {
    showWeatherData('Trình duyệt không hỗ trợ định vị');
  }
}

// Initialize everything when the DOM is ready
document.addEventListener('DOMContentLoaded', initWeather);
