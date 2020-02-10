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

//function to return a flattened version of array
const flatten =  function(array) {
  let output = [];
  array.forEach(element => {
    if (Array.isArray(element)) { //checks if main array value is array or not
      element.forEach(value => output.push(value)); //pushes sub array values to output
    } else output.push(element);  //pushes main array value (non-array) to output
  });
  return output;
};



//test code
console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]

