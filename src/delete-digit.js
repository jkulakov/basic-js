const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numberArray = String(n).split('');
  let numbersCounter = [];

  for (let i = 0; i < numberArray.length; i++) {
    let sum = '';
    numberArray.forEach((item, id, arr) => {
      if(id != i) {
        sum = sum + item;
      }
    });
    numbersCounter.push(Number(sum));
  }

  numberArray.splice(numbersCounter.indexOf(Math.max.apply(null, numbersCounter)), 1);
  return Number(numberArray.join(''));
}

module.exports = {
  deleteDigit
};
