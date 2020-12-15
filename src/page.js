import getWeather from './getWeather';

const submitForm = () => {
    const cityName = document.getElementById('search-input').value;
    getWeather(cityName);
};

const component = () => {
    const element = document.createElement('div');
    const pageTitle = document.createElement('h1');
    pageTitle.innerText = 'Weather App';
    element.classList.add('text-center', 'text-warning', 'font-weight-bold');
    const searchInput = document.createElement('input');
    searchInput.placeholder = 'Enter city name';
    searchInput.id = 'search-input';
    const submitInput = document.createElement('button');
    submitInput.classList.add('btn', 'btn-warning', 'text-white');
    submitInput.innerText = 'Get Weather';
    submitInput.onclick = submitForm;
    element.append(pageTitle, searchInput, submitInput);
    return element;
};

export default component;
