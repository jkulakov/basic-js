const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let resultStr = [];
  let additionStr = [];
  let repeatTimes = (options.hasOwnProperty('repeatTimes')) ? options.repeatTimes : 1;
  let separator = (options.hasOwnProperty('separator')) ? options.separator : '+';
  let addition = (options.hasOwnProperty('addition')) ? String(options.addition) : '';
  let additionRepeatTimes = (options.hasOwnProperty('additionRepeatTimes')) ? options.additionRepeatTimes : 1;
  let additionSeparator = (options.hasOwnProperty('additionSeparator')) ? options.additionSeparator : '|';

  for (let i = 1; i <= additionRepeatTimes; i++) {
    additionStr.push(addition);
  }

  for (let j = 1; j <= repeatTimes; j++) {
    resultStr.push(str + additionStr.join(`${additionSeparator}`));
  }

  let res = resultStr.join(`${separator}`);
  return res;

}

module.exports = {
  repeater
};
