const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  str = str.split('');
  let strCounter = []; strCounter.push(str[0])
  let finalStr = '';

  for (let i = 1; i <= str.length; i++) {
    if(str[i] == strCounter[strCounter.length-1]) {

      strCounter.push(str[i]);
    } else {
      console.log(strCounter)
      let c = strCounter.length; if(strCounter.length == 1) c = '';
      finalStr += c + strCounter[0];
      strCounter = [];
      strCounter.push(str[i]);
    }
  }
  return finalStr; 
}

// console.log(encodeLine('abbcca'));

module.exports = {
  encodeLine
};
