const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(/* matrix */) {
  // throw new NotImplementedError('Not implemented');
  
  const newMatrix = Array.from(arguments[0]);
  const cats = [];

  newMatrix.forEach(item => {

    item.forEach(it => {

      if(it == '^^') cats.push('^^');
    });
  });

  return cats.length;
}

console.log(countCats([
  ['##', 'dd', '00'],
  ['^^', '..', 'ss'],
  ['AA', 'dd', 'Oo'],
]))

module.exports = {
  countCats
};
