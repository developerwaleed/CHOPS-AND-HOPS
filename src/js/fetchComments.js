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
    comments += `<p>${element.creation_date} ${element.username} ${element.comment}</p><br>`;
  });

  commentContainer.innerHTML = comments;
  return result;
};

export default fetchComments;
