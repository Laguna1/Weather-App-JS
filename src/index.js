import "bootstrap";
import "./scss/app.scss";
import "./css/style.css";

const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const notification = document.querySelector(".notification");

const weather = {
  // temperature: {
  //   value: 18,
  //   unit: celsius,
  // },
  // description: "few clouds",
  // iconId: "01Id",
  // city: "London",
  // country: "GB",
};

weather.temperature = {
  unit: "celsius",
};

const KELVIN = 273;
const appId = "5591105db82a0e4b34df846e33599b1a";

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(setPosition, showError);
} else {
  notificationElement.style.display = "block";
  notificationElement.innerHTML =
    "<p> Browser doesn`t support geolocation.</p>";
}

function setPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  getWeather(latitude, longitude);
}

function showError(error) {
  notificationElement.style.display = "block";
  notificationElement.innerHTML = `<p> ${error.message}</p>`;
}

function getWeather(latitude, longitude) {
  let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${appId}`;
  console.log(api);
  fetch(api)
    .then(function (response) {
      let data = response.json();
      return data;
    })
    .then(function (data) {
      weather.temperature.value = Math.floor(data.main.temp - KELVIN);
      weather.description = data.weather[0].description;
      weather.iconId = data.weather[0].icon;
      weather.city = data.name;
      weather.country = data.sys.country;
    })
    .then(function () {
      displayWeather();
    });

  const displayWeather = () => {
    iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
    tempElement.innerHTML = `${weather.temperature.value} ° <span>C</span>`;
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
  };

  function celsiusToFahrenheit(temperature) {
    return (temperature * 9) / 5 + 32;
  }

  function getWeather(latitude, longitude) {
    let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${appId}`;
    fetch(api)
      .then(function (response) {
        let data = response.json();
        return data;
      })
      .then(function (data) {
        weather.temperature.value = Math.floor(data.main.temp - KELVIN);
        weather.description = data.weather[0].description;
        weather.iconId = data.weather[0].icon;
        weather.city = data.name;
        weather.country = data.sys.country;
      })
      .then(function () {
        displayWeather();
      });
  }

  tempElement.addEventListener("click", function () {
    if (weather.temperature.value === undefined) return;
    if (weather.temperature.unit === "celsius") {
      let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
      fahrenheit = Math.floor(fahrenheit);
      tempElement.innerHTML = `${fahrenheit}°  <span>F</span>`;
      weather.temperature.unit = "fahrenheit";
    } else {
      tempElement.innerHTML = `${weather.temperature.value} °  <span>C</span>`;
      weather.temperature.unit = "celsius";
    }
  });
}
