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
  const discNext = '--discard-next';
  const discPrev  = '--discard-prev';
  const doblNext = '--double-next';
  const doblPrev = '--double-prev';
  let newArr = [];
  if (Array.isArray(arr) === false) {
    throw new Error ("'arr' parameter must be an instance of the Array!");
  }
  for(let i = 0; i < arr.length; i += 1) {
    if (arr[i] === discPrev) {
      if (arr[i-2] === discNext) {
        continue;
      }
      newArr.pop();
    } else if (arr[i] === discNext) {
      i = i + 2;
    } else if (arr[i] === doblPrev) {
      if (arr[i-2] === discNext) {
        continue;
      }
      if (arr[i-2] === doblNext) {
        newArr.push(arr[i-1]);
        continue;
      }
      if (arr[i-1] === undefined) {
        continue;
      }
      newArr.push(arr[i-1]);
      newArr.push(arr[i-1]);
      i += 1;
    } else if (arr[i] === doblNext) {
      if (arr[i+1] === undefined) {
        continue;
      }
      newArr.push(arr[i+1]);
      newArr.push(arr[i+1]);
      i += 1;
    } else {
      newArr.push(arr[i])

    }
  }
  return newArr;
}

module.exports = {
  transform
};
