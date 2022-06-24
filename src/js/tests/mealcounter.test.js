const dishes = require('./mealcounter.js');

describe('Testing the comments counter', () => {
  const emptyList = {};

  let mealList = 
    {
      itemName: 'Biryani',
      mainIng: 'rice and meat',
      count: 'one meal',
    };

    let mealList2 = {
        itemName: 'Polao',
      mainIng: 'rice and meat',
      count: 'second meal',
      origin: 'Afg',
    };
    
    

  const meals = dishes(mealList);
  const empty = dishes(emptyList);
  const meals2 = dishes(mealList2);

  test('The length of object is 3', () => {
    expect(meals).toBe(3);
  });

  test('The object is empty (0)', () => {
    expect(empty).toBe(0);
  });
  test('The length of object is 4', () => {
    expect(meals2).toBe(4);
  });
});