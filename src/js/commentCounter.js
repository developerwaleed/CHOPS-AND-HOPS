const counter = (array) => {
  const commentCount = document.getElementById('comment-count');
  commentCount.innerHTML = array.length;
};

export default counter;
