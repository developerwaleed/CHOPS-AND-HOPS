// import clickHeart from './clickHeart.js';
import sendLikes from './likes.js';
// import postLikes from './postLikes.js';

const gridDiv = document.querySelector('.grid-div');
gridDiv.innerHTML = '';
let grid = '';

const display = (str) => {
  str.forEach((item) => {
    grid += `<div class="grid-item">
          <div>
            <img src="${item.strMealThumb}" alt="food pic" class="food">
          </div>
          <div class="heart">
            <p>${item.strMeal}</p>
            <div id="${item.idMeal}"><i class="fa fa-regular fa-heart"></i></div>
          </div>
          <div class="likes" id="like-container">
            <p>0 likes</p>
          </div>
          <div class="button">
            <button class="comment-btn" id="${item.idMeal}">Comments</button>
          </div>
      </div>`;
  });
  gridDiv.innerHTML = grid;

  sendLikes();
  // postLikes();
  // clickHeart();
  // const heartIcon = document.getElementById('heart-icon');

  //   heartIcon.addEventListener('click',() => {
  //     // e.preventDefault();
  //     console.log("you clicked like button");
  //   })
};

export default display;