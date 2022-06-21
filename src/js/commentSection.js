import photo from '../assets/photo.jpg';

const openComment = document.getElementById('open-comment-modal');
const appearModel = document.getElementById('comment-modal');
const deskModal = document.getElementById('comment-modal');
const Deskoverlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closebtn');
const productImg = document.getElementById('product-img');

openComment.addEventListener('click', () => {
  appearModel.style.display = 'flex';
  deskModal.classList.add('active');
  Deskoverlay.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  appearModel.style.display = 'none';
  deskModal.classList.remove('active');
  Deskoverlay.classList.remove('active');
});

productImg.src=photo;