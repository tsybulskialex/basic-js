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
  const copyStr = String(str);
  options.repeatTimes = options.repeatTimes || 1;
  options.separator = options.separator || '+';
  options.additionRepeatTimes = options.additionRepeatTimes || 1;
  options.additionSeparator = options.additionSeparator || '|';

  if (options.addition === undefined) {
    options.addition = '';
  } else {
    options.addition = String(options.addition);
  }
  
  let curStr = '';
  let finalStr = '';

  for (let i = 0; i < +options.repeatTimes; i += 1) {
    finalStr += curStr;
    curStr = '';
    for (let j = 0; j < +options.additionRepeatTimes; j += 1) {
      if (j !== +options.additionRepeatTimes - 1) {
        curStr += options.addition + options.additionSeparator;
      } else {
        curStr += options.addition;
      }
    }
    if (i !== +options.repeatTimes - 1) {
      curStr = copyStr + curStr + options.separator;
    } else {
      curStr = copyStr + curStr;
      finalStr += curStr;
    }
  }
  return finalStr;
}

module.exports = {
  repeater
};
