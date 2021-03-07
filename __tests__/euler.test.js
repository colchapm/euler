import TestEuler from '../src/euler.js';

describe ('Test', () => {

  let newTest;
  beforeEach(() => {
    newTest = new TestEuler();
  });

  test('should return the numbers that are multiples of 3 and 5 from the number 10', () => {
      expect(newTest.returnNumbers(10)).toEqual([3, 5, 6, 9]);
  })

  test('should return the sum of the number that are multiples of 3 and from the number 10', () => {
    expect(newTest.sumNumbers(10)).toEqual(23);
  })

  test('should return the sum of the number that are multiples of 3 and from the number 10', () => {
    expect(newTest.sumNumbers(1000)).toEqual(233168);
  })
});