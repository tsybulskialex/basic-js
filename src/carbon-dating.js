const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (isNaN(sampleActivity) === true) {
    return false;
  }
  if (+sampleActivity <= 0 || +sampleActivity > 5730) {
    return false;
  }
  if (typeof sampleActivity !== 'string') {
    return false;
  }
  const a = Math.log(15 / +sampleActivity);
  const b = 0.693 / 5730;
  const res = +(Math.ceil(a / b));
  if (res <= 0) {
    return false;
  }
  return res;
}

module.exports = {
  dateSample
};
