import "bootstrap";
import "./scss/app.scss";
import "./css/style.css";
import cityWeatherData from "./getWeather";
// import container from "./page";

// getCityFromInput; input
// submitCityFromForm;  (button) -> returns cityData

// showWeatherInCity;   function(cityData->temp, feelsLike, humidity, pressure)
// showWeatherTable();

//Celcius/Farenheit(temp)
// const fahrToCelcius = (temp) => Math.floor((temp - 32) * ( 5 / 9));

// const apiKey = "5591105db82a0e4b34df846e33599b1a";

const notification = document.querySelector(".notification");
const iconElement = document.querySelector(".weather-icon");

const tempElement = document.querySelector(".temperature-value p");

const descElement = document.querySelector(".temperature-description p");

const locationElement = document.querySelector(".location p");

const displayWeather = () => {
  let celsius = "C";
  let fahrenheit = "F";
  const weather = {
    temperature: {
      value: 18,
      unit: celsius,
    },
    description: "few clouds",
    iconId: "01Id",
    city: "London",
    country: "GB",
  };

  iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
  tempElement.innerHTML = `${weather.temperature.value} ° <span>C</span>`;
  descElement.innerHTML = weather.description;
  locationElement.innerHTML = `${weather.city}, ${weather.country}`;
};

// function celsiusToFahrenheit(temperature){
//   return (temperature * 9/5 ) + 32;
// }
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
function getCurrentPosition(setPosition, error) {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(setPosition, showError);
  } else {
    notificationElement.style.display = "block";
    notificationElement.innerHTML =
      "<p> Browser doesn`t support geolocation.</p>";
  }
}

function setPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  getWeather(latitude, longtitude);
}
function showError(error) {
  notificationElement.style.display = "block";
  notificationElement.innerHTML = `<p> ${error.message}</p>`;
}

const KELVIN = 273;
const appId = "5591105db82a0e4b34df846e33599b1a";
function getWeather(latitude, longitude) {
  let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${appId}`;
  fetch(api).then(function(response){
    let data = response.json();
    return data;
  }).then( function(data){
    weather.temperature.value = Math.floor(data.main.temp - KELVIN);
    weather.description = data.weather[0].description;
    weather.iconId = data.weather[0].icon;
    weather.city = data.name;
    weather.country = data.sys.country;
    }).then ( function() {
      displayWeather();
    });

  // return fetch(
  //   `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${appId}`,
  //   { mode: "cors" }
  // )
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// }

cityWeatherData();
displayWeather();
// container();
