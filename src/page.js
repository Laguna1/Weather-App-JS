const container = () => {
  const pageTitle = document.createElement("div");
  pageTitle.classList.add("h1");
  pageTitle.innerText = "Weather App";

  const formGroup = document.createElement("div");
  formGroup.classList.add("form-group");

  const label = document.createElement("label");
  label.innerText = "City: ";
  const searchInput = document.createElement("input");
  searchInput.classList.add("search-input");
  searchInput.required = "true";
  searchInput.placeholder = "Enter city name";

  formGroup.appendChild(label);
  formGroup.appendChild(searchInput);

  const searchResult = document.createElement("div");
  searchResult.classList.add("result");
  searchResult.innerHtml = `<h4>Today in:</h4>
    <p>"cityName"</p>
    <p><span>temp 00</span></p>
    <p><span>feels like 00</span></p>
    <p><span>humidity 00</span></p>
    <p><span>pressure  00</span></p>`;

  container.appendChild(pageTitle);
  container.appendChild(formGroup);
  container.appendChild(searchResult);

  const showContentDiv = document.querySelector("#content");
  showContentDiv.appendChild(container);
};

export default container;
