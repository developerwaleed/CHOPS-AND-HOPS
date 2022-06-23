// import fetchItems from "./fetchitems";

const dishes = (arr) => {
  // console.log("dishes function works correctly");

  const dishesLength = Object.keys(arr).length;
  const dishCount = document.getElementById('dish-count');
  dishCount.innerHTML = dishesLength;
  // console.log(arr);
  // console.log(dishesLength);

  return dishesLength;
};

export default dishes;