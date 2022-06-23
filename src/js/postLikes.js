
const postLikes = async (mealId, likeButton) => {
  
    const resp = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WyIYgphl1NOYp2yAcm3L/likes',
      {
        method: 'POST',
        headers: { 'Content-type': 'application/json; charset=UTF-8'},
        body: JSON.stringify({
          item_id: mealId,
        }),
      },
    );
    let result = resp.text;
    // console.log(result);

    const responsed = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WyIYgphl1NOYp2yAcm3L/likes',
    );
    const likes = await responsed.json();
    const container = likeButton.nextElementSibling;
    const index = likes.findLastIndex((like) => like.item_id == mealId);
    index >= 0 ? container.innerHTML = `<p>${likes[index].likes} likes</p>` : '0 Likes'; // ternary operator
  
    if (!resp.ok) {
      throw new Error(`HTTP error! status: ${resp.status}`);
    }
  
    return result;
  };
  
  export default postLikes;