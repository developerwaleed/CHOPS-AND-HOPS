import display from './displayItems.js';
import registerCommentBtns from './commentSection.js';
import dishes from './dishescounter.js';

const fetchItems = async () => {
  const response = await fetch(
    'https://www.themealdb.com/api/json/v1/1/filter.php?a=indian',
  );
  if (!response.ok) {
    throw new Error(`something went wrong: ${response.status}`);
  }
  const result = await response.json();
  dishes(result.meals);

  display(result.meals);
  registerCommentBtns();

  return result;
};

export default fetchItems;
