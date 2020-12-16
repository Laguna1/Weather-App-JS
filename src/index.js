import 'bootstrap';
import './scss/app.scss';
import './css/style.css';
import startIcon from './icons/unknown.png';
import form from './page';


const appTitle = document.querySelector('.app-title');
const iconImage = document.getElementById('default-image');


iconImage.src = startIcon;
appTitle.appendChild(form());
