const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
// class DepthCalculator {
  function calculateDepth(arr) {

    let counter = 0;

    function depth(arr) {
      counter++;
      arr.forEach(item => {
        if(Array.isArray(item)) {
          depth(item);
        }
      });
    }

    depth(arr);

    return counter;

  }
// }

console.log(calculateDepth([[[[[[[[[[]]]]]]]]]]));

// module.exports = {
//   DepthCalculator
// };
