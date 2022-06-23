

const dishes = (arr) => {

  const dishesLength = Object.keys(arr).length;
  const dishCount = document.getElementById('dish-count');
  dishCount.innerHTML = dishesLength;

  return dishesLength;
};

export default dishes;