import './style.css';
import food from './food.jpg';
import food1 from './food1.jpg';
import food2 from './food2.jpg';
import food3 from './food3.jpg';
import food4 from './food4.jpg';
import food5 from './food5.jpg';


document.querySelector('.food').src = food;
document.querySelector('.food1').src = food1;
document.querySelector('.food2').src = food2;
document.querySelector('.food3').src = food3;

document.querySelector('.food4').src = food4;
document.querySelector('.food5').src = food5;



window.addEventListener('load', fetchItems);
