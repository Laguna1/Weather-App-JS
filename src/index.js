import "bootstrap";
import "./scss/app.scss";
import "./css/style.css";
import container from "./page";

// const component = () => {
//   const element = document.createElement("div");
//   element.innerHTML = "<h1>Weather App</h1>";
//   element.classList.add("text-center", "text-warning", "font-weight-bold");

//   return element;
// };

// document.body.appendChild(component());

// showCityForm; input
// submitCityFromForm;  (button) -> returns cityData
// showWeatherInCity;   function(cityData->temp, feelsLike, humidity, pressure)
// showWeatherTable();

//Celcius/Farenheit(temp)
// let celcius = (temp-32)*( 5 / 9);

// const apiKey = "5591105db82a0e4b34df846e33599b1a";
function cityData(cityName) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=5591105db82a0e4b34df846e33599b1a`,
    { mode: "cors" }
  )
    .then((response) => response.json())
    .then((data) => console.log(data));
}
cityData("London");
container();
