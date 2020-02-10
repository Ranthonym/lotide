//assert equal function
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

// letter positions tracker function
const letterPositions = function(sentence) {
  const results = {};
  sentence = sentence.split("");
  for (const [index, letter] of sentence.entries()) {
    if (letter !== ' ') {
      if (!results[letter]) {
        results[letter] = [];
      } 
      results[letter].push(index);   
    }
  }
  return results;
};


// TEST CODE
console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("hello").e, [1]);

