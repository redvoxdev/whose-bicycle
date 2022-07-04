const assert = require('assert');

const whoseBicycle = require('./src');

it('Should return exact string', () => {
  const actual = whoseBicycle(
    {
      'algebra': 6,
      'history': 7,
      'physics': 8,
      'geography': 9,
      'chemistry': 10
    },
    {
      'algebra': 8,
      'history': 7,
      'physics': 8,
      'geography': 9,
      'chemistry': 10
    },
    {
      'algebra': 6,
      'history': 5,
      'physics': 5,
      'geography': 9,
      'chemistry': 10
    });

  assert.equal(actual, 'I need to buy a bicycle for my second son.');
});
it('Should return exact string', () => {
  const actual = whoseBicycle(
    {
      'algebra': 6,
      'history': 7,
      'physics': 8,
      'geography': 9,
      'chemistry': 10
    },
    {
      'algebra': 6,
      'history': 7,
      'physics': 8,
      'geography': 9,
      'chemistry': 10
    },
    {
      'algebra': 6,
      'history': 7,
      'physics': 8,
      'geography': 9,
      'chemistry': 10
    });

  assert.equal(actual, 'I need to buy a bicycle for my third son.');
});
it('Should return exact string', () => {
  const actual = whoseBicycle(
    {
      'algebra': 6,
      'history': 7,
      'physics': 8,
      'geography': 9,
      'chemistry': 5
    },
    {
      'algebra': 6,
      'history': 7,
      'physics': 8,
      'geography': 9,
      'chemistry': 10
    },
    {
      'algebra': 6,
      'history': 7,
      'physics': 8,
      'geography': 9,
      'chemistry': 10
    });

  assert.equal(actual, 'I need to buy a bicycle for my third son.');
});
it('Should return exact string', () => {
  const actual = whoseBicycle(
    {
      'algebra': 3,
      'history': 7,
      'physics': 8,
      'geography': 4,
      'chemistry': 10
    },
    {
      'algebra': 6,
      'history': 7,
      'physics': 8,
      'geography': 9,
      'chemistry': 4
    },
    {
      'algebra': 9,
      'history': 7,
      'physics': 9,
      'geography': 9,
      'chemistry': 10
    });

  assert.equal(actual, 'I need to buy a bicycle for my third son.');
});