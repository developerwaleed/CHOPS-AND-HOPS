const displayLikes = (involvementArr) => {
  const meals = document.querySelectorAll('.grid-item');
  // console.log('likeArray=',involvementArr);

  

  meals.forEach((element) => {
    const mealId = Number(element.children[3].children[0].id);
    const conatiner = element.children[2];
    // console.log(conatiner);
    const index = involvementArr.findLastIndex((like) => like.item_id == mealId);
    // console.log(index);
    const msg = index >= 0 ? conatiner.innerHTML = `<p>${involvementArr[index].likes} likes</p>` : '0 Likes';
  });
 
  // involvementArr.forEach((elem) => {
   
  // });
};

export default displayLikes;
