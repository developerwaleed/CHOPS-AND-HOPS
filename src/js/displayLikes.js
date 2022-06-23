const displayLikes = (involvementArr) => {
  const meals = document.querySelectorAll('.grid-item');
  

  meals.forEach((element) => {
    const mealId = Number(element.children[3].children[0].id);
    const container = element.children[2];
   
    const index = involvementArr.findLastIndex((like) => Number(like.item_id) === mealId);
    /* eslint-disable no-unused-vars */
    const msg = index >= 0 ? container.innerHTML = `<p>${involvementArr[index].likes} likes</p>` : '0 Likes';
    /* eslint-disable no-unused-vars */
  });

  
};

export default displayLikes;
