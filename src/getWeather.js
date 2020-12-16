const iconElement = document.querySelector('.weather-icon');
const tempElement = document.querySelector('.temperature-value p');
const descElement = document.querySelector('.temperature-description p');
const locationElement = document.querySelector('.location p');

const weather = {};

weather.temperature = {
  unit: 'celsius',
};

const KELVIN = 273;
const appId = '5591105db82a0e4b34df846e33599b1a';

const displayWeather = () => {
  iconElement.innerText = '';
  const weatherIcon = document.createElement('img');
  weatherIcon.src = `../src/icons/${
    weather.iconId
  }.png`;

  iconElement.appendChild(weatherIcon);

  tempElement.innerHTML = `${
    weather.temperature.value
  } ° <span>C</span>`;
  descElement.innerHTML = weather.description;
  locationElement.innerHTML = `${
    weather.city
  }, ${
    weather.country
  }`;
};

function getWeather(cityName) {
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${appId}`;
  fetch(api).then((response) => {
    const data = response.json();
    return data;
  }).then((data) => {
    weather.temperature.value = Math.floor(data.main.temp - KELVIN);
    weather.description = data.weather[0].description;
    weather.iconId = data.weather[0].icon;
    weather.city = data.name;
    weather.country = data.sys.country;
  }).then(() => {
    displayWeather();
  });


  function celsiusToFahrenheit(temperature) {
    return (temperature * 1.8) + 32;
  }


  tempElement.addEventListener('mouseover', () => {
    if (weather.temperature.value === undefined) { return; }

    if (weather.temperature.unit === 'celsius') {
      let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
      fahrenheit = Math.floor(fahrenheit);
      tempElement.innerHTML = `${fahrenheit}°  <span>F</span>`;
      weather.temperature.unit = 'fahrenheit';
   } else {
      tempElement.innerHTML = `${
        weather.temperature.value
      } °  <span>C</span>`;
      weather.temperature.unit = 'celsius';
   }
  });
}

export default getWeather;
