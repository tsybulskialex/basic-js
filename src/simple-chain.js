const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr : [],
  getLength() {
    this.arr.length;
    return this;
  },
  addLink(value) {
    if (value === undefined) {
      this.arr.push('( )');
      return this;
    }
    this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (isNaN(position) || position <= 0 
    || position > this.arr.length || position === undefined) {
      this.arr = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    const finish = this.arr.join('~~');
    this.arr = [];
    return finish;
  }
};

module.exports = {
  chainMaker
};
