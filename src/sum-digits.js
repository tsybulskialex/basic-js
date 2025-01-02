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
  let str = String(n);
  let num = n;
  while (num >= 10) {
    let count = 0;
    for (let i = 0; i < str.length; i += 1) {
      count += +str[i];
    }
    num = count;
    str = String(count);
  }
  return num
}

module.exports = {
  getSumOfDigits
};
