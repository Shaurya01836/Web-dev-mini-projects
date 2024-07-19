document.getElementById('getWeatherBtn').addEventListener('click', async () => {
    const city = document.getElementById('cityInput').value;
    if (!city) {
      alert('Please enter a city name');
      return;
    }
  
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ee3c2bee9567df60e53cfeb4805fd1e3`);
      const weather = response.data;
  
      document.getElementById('cityName').textContent = weather.name;
      document.getElementById('temperature').textContent = `Temperature: ${weather.main.temp} K`;
      document.getElementById('weather').textContent = `Weather: ${weather.weather[0].description}`;
      document.getElementById('humidity').textContent = `Humidity: ${weather.main.humidity}%`;
      document.getElementById('windSpeed').textContent = `Wind Speed: ${weather.wind.speed} m/s`;
      
      document.getElementById('weatherInfo').style.display = 'block';
    } catch (error) {
      alert('City not found. Please try again');
    }
  });
  