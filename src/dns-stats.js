const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const splitArr = domains.map((item) => item.split('.'));
  const revArr = splitArr.map(item => item.reverse());
  let arr = [];
  for (let i = 0; i < revArr.length; i += 1) {
    let combi;
    for (let j = 0; j < revArr[i].length; j += 1) {
      let cur = revArr[i][j];
      if (j < 1) {
        arr.push(`.${cur}`);
        continue;
      }
      if ( j === 1) {
        combi = `${arr[j-1]}.${cur}`;
        arr.push(combi);
      }
      if (j > 1) {
        combi = `${arr[j-1]}.${cur}`;
        arr.push(combi);
      }
    }
  }
  let count = 0;
  let obj = {};
  for (let i of arr) {
    count = 0;
    if (obj.hasOwnProperty(i) === false) {
      count += 1;
      obj[i] = count;
    } else {
      count += 1;
      obj[i] = +obj[i] + 1;
    }
  }
  return obj;
}

module.exports = {
  getDNSStats
};
