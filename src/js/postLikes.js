const postLikes = async (mealId, likeButton) => {
  const resp = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WyIYgphl1NOYp2yAcm3L/likes',
    {
      method: 'POST',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify({
        item_id: mealId,
      }),
    },
  );
  const result = resp.text;

  const responsed = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WyIYgphl1NOYp2yAcm3L/likes',
  );
  const likes = await responsed.json();
  const container = likeButton.nextElementSibling;
  const index = likes.findLastIndex((like) => like.item_id === mealId);
  /* eslint-disable no-unused-vars */
  const msg = index >= 0 ? container.innerHTML = `<p>${likes[index].likes} likes</p>` : '0 Likes'; // ternary operator
  /* eslint-disable no-unused-vars */
  if (!resp.ok) {
    throw new Error(`HTTP error! status: ${resp.status}`);
  }

  return result;
};

export default postLikes;