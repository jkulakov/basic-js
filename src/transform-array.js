const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let resultArray = [];

  if (!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`);

  for (let i = 0; i < arr.length; i++) {
    
    resultArray.push(arr[i]);

    if(arr[i] == '--discard-next') {
        resultArray.pop();
        if (i < arr.length - 1) i += 2;
    } else if(arr[i] == '--double-prev') {    
      resultArray.pop();
      if(i > 0) {
      resultArray.push(resultArray[i-1]);
      }
    } else if(arr[i] == '--double-next') {    
      resultArray.pop();
      if(i < arr.length - 1) {
          resultArray.push(arr[i+1]);
      }
    } else if(arr[i] == '--discard-prev') {    
      resultArray.pop();
      if (i > 0) {
        resultArray.pop();
      }
    }
    
  }
  return resultArray;
}

module.exports = {
  transform
};
