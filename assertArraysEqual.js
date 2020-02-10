const eqArrays = require('./eqArrays');

const assertArraysEqual = function (firstArray, secondArray) {
  //evaluates boolean value of array equality function operation
  if (eqArrays(firstArray, secondArray)) {
    console.log(`✔️ ✔️ ✔️ Assertion Passed`);
  } else console.log(`❌❌❌ Assertion Failed`);
};



module.exports = assertArraysEqual;

