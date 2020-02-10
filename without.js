// TEST ASSERTION FUNCTION
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

//function to find and rerun middle index value(s)
const middle = function(array) {
  let mid = [];
    if (array.length <= 2) {
    return mid;
  }
  mid.push(array[Math.floor((array.length - 1)/2)]);
  if (array.length % 2 === 0) {
    mid.push(array[Math.ceil((array.length - 1)/2)]);
  }
  return mid;
};

const without =  function(source, itemsToRemove) {
  return source.filter(value => !itemsToRemove.includes(value))
};

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);