const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(machine = true) {
    this.machine = machine;
  }

  encrypt(str, key) {
    if (str === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    const newStr = key.toUpperCase();
    let count = 0;
    for (let i = 0; i < str.length; i += 1) {
      if (count === newStr.length) {
        count = 0;
      }
      let keyCur = upperAlphabet.indexOf(newStr[count]);
      let curCharStr = str[i].toUpperCase();
      let curCharId = upperAlphabet.indexOf(curCharStr);
      if (str[i] === ' ' || upperAlphabet.includes(curCharStr) === false) {
        result += str[i];
        continue;
      }
      result += upperAlphabet[(curCharId + keyCur) % 26];
      count += 1;
    }
    if (this.machine === false) {
      return result.split('').reverse().join('');
    }
    return result;
  }
  decrypt(str, key) {
    if (str === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    const newStr = key.toUpperCase();
    let count = 0;
    for (let i = 0; i < str.length; i += 1) {
      if (count === newStr.length) {
        count = 0;
      }
      let keyCur = upperAlphabet.indexOf(newStr[count]);
      let curCharStr = str[i].toUpperCase();
      let curCharId = upperAlphabet.indexOf(curCharStr);
      if (str[i] === ' ' || upperAlphabet.includes(curCharStr) === false) {
        result += str[i];
        continue;
      }
      result += upperAlphabet[(curCharId - keyCur + 26) % 26];
      count += 1;
    }
    if (this.machine === false) {
      return result.split('').reverse().join('');
    }
    return result;
  }
}

module.exports = {
  VigenereCipheringMachine
};
