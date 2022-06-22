const displayLikes =(involvementArr) => {
    let meals = document.querySelectorAll('.grid-item');
    // console.log('likeArray=',involvementArr);

    involvementArr.forEach((elem) => {
        meals.forEach( (element) => {
            let mealId = Number(element.children[3].children[0].id);
            let conatiner = element.children[2];
            if (elem.item_id === mealId)
        {
            conatiner.innerHTML = `<p>${elem.likes} likes</p>`;
        }
        });   
    });
}

export default displayLikes;
