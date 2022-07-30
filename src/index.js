import './style.css';
import fetchItems from './js/home/fetchitems.js';
import logo from './assets/logo.png';

const logoAttr = document.getElementById('logo');
logoAttr.src = logo;
window.onload = fetchItems();
