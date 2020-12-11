import "bootstrap";
import "./scss/app.scss";
import "./css/style.css";

function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  // element.innerText = "Hello webpack";
  element.innerHTML = "<h1>Weather App</h1>";
  element.classList.add("text-center", "text-warning", "font-weight-bold");

  return element;
}

document.body.appendChild(component());

// 1.function for location

// const setLocation = () => {};
// 5591105db82a0e4b34df846e33599b1a
//  http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=1111111111

function cityData(cityName) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=5591105db82a0e4b34df846e33599b1a`,
    { mode: "cors" }
  )
    .then((response) => response.json())
    .then((data) => console.log(data));
}
cityData("London");
