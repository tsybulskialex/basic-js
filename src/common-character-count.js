const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  if (s1.length > s2.length) {
    for (let i = 0; i < s2.length; i += 1) {
      if (s1.includes(s2[i])) {
        s1 = s1.replace(s2[i], '');
        count += 1;
      }
    }
    return count;
  }
  for (let i = 0; i < s1.length; i += 1) {
    if (s2.includes(s1[i])) {
      s2 = s2.replace(s1[i], '');
      count += 1;
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
