import display from './displayItems.js';
import displayComments from './commentSection.js';

const fetchItems = async () => {
  const response = await fetch(
    'https://www.themealdb.com/api/json/v1/1/filter.php?a=indian',
  );
  if (!response.ok) {
    throw new Error(`something weng wrong: ${response.status}`);
  }
  const result = await response.json();
  display(result.meals);
  displayComments();
  return result;
};

export default fetchItems;
