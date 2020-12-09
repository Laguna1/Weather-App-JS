import "./style.css";

function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  // element.innerText = "Hello webpack";
  element.innerHTML = "<h1>Hello</h1>";
  element.classList.add("hello");

  return element;
}

document.body.appendChild(component());
