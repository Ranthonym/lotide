// ASSERT EQUAL FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️ ✔️ ✔️ Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);

};

//function that finds object key of user entered value
const findKeyByValue = function(allItems, value) {
  //stores an array of all object keys
  let keyArray = Object.keys(allItems);
  for (const key of keyArray) {
    if (allItems[key] === value) {
      return key;
    }
  }
  return;
}


// TEST CODE
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);