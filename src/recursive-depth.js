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
class DepthCalculator {
  constructor() {
    this.count = 1;
  }

  calculateDepth(arr) {
    let depth = 0;

    if(Array.isArray(arr) == false) { 
      return 0; 
    }
    arr.forEach(elem => {
      depth = Math.max(depth, this.calculateDepth(elem));
    });
    return depth + this.count;
  }
}


module.exports = {
  DepthCalculator
};
