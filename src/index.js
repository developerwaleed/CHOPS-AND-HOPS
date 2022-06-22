import './style.css';
import fetchItems from './js/fetchitems.js';
import sendLikes from './js/likes.js';

// const url = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WyIYgphl1NOYp2yAcm3L/likes";

window.onload = fetchItems();

window.onload = sendLikes();
