import fetchData from './getDataFromId.js';
import fetchComments from './fetchComments.js';
import postLikes from './postLikes.js';


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
 
  heartIcon.forEach((element) => {
    element.addEventListener('click', () => {
      const currentLikeId = element.children[1].getAttribute('id');
      
      postLikes(currentLikeId, element);
    });
  });

 
};

export default registerCommentBtns;


