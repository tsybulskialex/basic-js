const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }
  if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error ('Invalid date!');
  }
  if (Object.entries(date).length > 0) {
    throw new Error ('Invalid date!');
  }
  const year = date.getFullYear();
  const month = date.getMonth();
  const days = date.getDay();
  const winter = [11, 0, 1];
  const autumn = [8, 9, 10];
  const summer = [5, 6, 7];
  const spring = [2, 3, 4];

  if (isNaN(year) || isNaN(month) || isNaN (days) || typeof date !== 'object') {
    return 'Invalid date!';
  }

  if (month > 11 || month < 0 || days < 0) {
    return 'Invalid date!';
  }
  // winter
  if (days <= 28 && winter.includes(month)) {
    return 'winter';
  } else if (days > 28 && month === 1) {
    return 'spring';
  }
  if (days <= 31 && winter.includes(month)) {
    return 'winter';
  }
  // spring
  if (days <= 31 && spring.includes(month)) {
    return 'spring'
  } else if (days > 31 && month === 4) {
    return 'summer';
  }
  // summer
  if (days <= 31 && summer.includes(month)) {
    return 'summer';
  } else if (days > 31 && month === 7) {
    return 'autumn';
  }
  //autumn
  if (days <= 30 && autumn.includes(month)) {
    return 'autumn';
  } else if (days > 30 && month === 10) {
    return 'winter';
  }
  if (days <= 31 && autumn.includes(month)) {
    return 'autumn';
  }
}

module.exports = {
  getSeason
};
