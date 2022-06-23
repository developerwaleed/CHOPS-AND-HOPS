import fetchData from './getDataFromId.js';
import fetchComments from './fetchComments.js';
import postLikes from './postLikes.js';
// import sendLikes from '/likes.js';

const appearModel = document.getElementById('comment-modal');
const deskModal = document.getElementById('comment-modal');
const Deskoverlay = document.getElementById('overlay');

const displayCommentSection = (element) => {
  fetchData(element.id);
  fetchComments(element.id);
  appearModel.style.display = 'flex';
  deskModal.classList.add('active');
  Deskoverlay.classList.add('active');
};

const registerCommentBtns = () => {
  const openComment = document.querySelectorAll('.comment-btn');
  openComment.forEach((element) => {
    element.addEventListener('click', () => displayCommentSection(element));
  });

  const heartIcon = document.querySelectorAll('.heart');
  // console.log(heartIcon);
  heartIcon.forEach((element) => {
    element.addEventListener('click', () => {
      const currentLikeId = element.children[1].getAttribute('id');
      //  console.log(element);
      postLikes(currentLikeId, element);
    });
  });

  // const dishes =  (arr) => {
  //        arr.length;
  //   const dishCount = document.getElementById('dish-count');
  //   dishCount.innerHTML = arr.length;
  //   console.log(arr.length);
  
  //   return arr.length;

  // }


};

export default registerCommentBtns;

// export {dishes};
