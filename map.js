const words = ["ground", "control", "to", "major", "tom"];

const map =  function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;

};


const results1 = map(words, word => word[0]);
console.log(results1);

// ASSERTION CHECK FUNCTION
const eqArrays = function(first, second) { 
  //checks if array sizes are equal, returns false if not equal
  if (first.length !== second.length) return false;
  for (let i = 0; i < first.length; i ++) {
    //checks if array values at same index are equal, returns false if not
    if (first[i] !== second[i]) return false;
  }
  //returns true if equal value checks are also true 
  return true;
}

const assertArraysEqual = function (firstArray, secondArray) {
  //evaluates boolean value of array equality function operation
  if (eqArrays(firstArray, secondArray)) {
    console.log(`✔️ ✔️ ✔️ Assertion Passed`);
  } else console.log(`❌❌❌ Assertion Failed`);
};

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results1, [ 'grew', 'cat', 't', 'm', 't' ]);
