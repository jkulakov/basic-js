const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {

  function sumNums(n) {
    let nStr = String(n);
    nStr = nStr.split('');
    n = 0;
    nStr.forEach(item => {
      n += Number(item);
    });
    return n;
  }

  while (n>9) {
    n = sumNums(n);
  }

  return n;


}

console.log(getSumOfDigits(123));

module.exports = {
  getSumOfDigits
};
