import "./style.css";
import "bootstrap";
import "./scss/app.scss";

function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  // element.innerText = "Hello webpack";
  element.innerHTML = "<h1>Weather App</h1>";
  element.classList.add("hello");

  return element;
}

document.body.appendChild(component());

// 1.function for location

const setLocation = () => {};
