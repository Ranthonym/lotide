const takeUntil = function(array, callback) {
  let newArray = [];
  let flag = true; //boolean flag that is used to push elements into array
  array.forEach(element => {
    if(callback(element))
      flag = false;
     if (flag) //push new elements only if flag is "true"
      newArray.push(element);
    
  });
  return newArray;
  };

//a while loop would have been simpler to break out of loop when callback returns "false"

//ASSERTION FUNCTION CHECK
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

//test code
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ] );
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);