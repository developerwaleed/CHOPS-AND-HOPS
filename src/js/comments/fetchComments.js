import counter from './commentCounter.js';

const fetchComments = async (id) => {
  const response = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WyIYgphl1NOYp2yAcm3L/comments?item_id=${id}`,
  );
  if (!response.ok) {
    throw new Error(`something weng wrong: ${response.status}`);
  }
  const result = await response.json();
  const commentContainer = document.querySelector('.fetch-comments');
  let comments = '';
  counter(result);
  result.forEach((element) => {
    comments += `<div class="comment-card">
    <div class="comment-info">
      <div class="avtar"><i class="fa-solid fa-user"></i></div>
      <div class="comment-name"><p>${element.username}</p></div>
      <div class="comment-date"><p>${element.creation_date}</p></div>
    </div>
    <div class="comment">
      <p>
      ${element.comment}
      </p>
    </div>
  </div>`;
  });

  commentContainer.innerHTML = comments;
  return result;
};

export default fetchComments;
