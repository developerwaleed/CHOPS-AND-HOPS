const counter = (array) => {
  const commentCount = document.getElementById('comment-count');
  commentCount.innerHTML = array.length;

  return array.length;
};

export default counter;