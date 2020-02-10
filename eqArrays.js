const assertEqual = require('./assertEqual');

let eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } 
  
  if (arr1.length === arr2.length) {
      for(let i = 0; i < arr2.length; i++) {
        if (!(arr1[i] === arr2[i])) return false;
    }
    return true;
  }
};

module.exports = eqArrays;