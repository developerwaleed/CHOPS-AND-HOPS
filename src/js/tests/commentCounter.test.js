const counter = require('./commentCounter.js');

describe('Testing the comments counter', () => {
  const emptyList = [];

  const commentsList = [
    {
      username: 'Waleed',
      creation_date: '2022-06-22',
      comment: 'Test 1',
    },
    {
      username: 'safar ali',
      creation_date: '2022-06-26',
      comment: 'Test 2',
    },
  ];

  const count = counter(commentsList);
  const empty = counter(emptyList);

  test('The comments are 2', () => {
    expect(count).toBe(2);
  });

  test('The are no comments (0)', () => {
    expect(empty).toBe(0);
  });
});
