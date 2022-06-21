import fetchData from './getDataFromId.js';

const appearModel = document.getElementById('comment-modal');
const deskModal = document.getElementById('comment-modal');
const Deskoverlay = document.getElementById('overlay');

const displayCommentSection = (element) => {
  fetchData(element.id);
  appearModel.style.display = 'flex';
  deskModal.classList.add('active');
  Deskoverlay.classList.add('active');
};

const displayComments = () => {
  const openComment = document.querySelectorAll('.comment-btn');
  openComment.forEach((element) => {
    element.addEventListener('click', () => displayCommentSection(element));
  });
};

export default displayComments;
