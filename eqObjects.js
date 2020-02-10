// ASSERT EQUAL FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️ ✔️ ✔️ Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);

};
// equal arrays function
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  //compares number of keys of both objects
  if (Object.keys(object1).length !== Object.keys(object2).length) {return false;}; 
  for (const key of Object.keys(object1)) {
    //checks if key value is an array
    if (Array.isArray(object1[key])) { 
      return eqArrays(object1[key], object2[key]);
    } 
    else if (object1[key] !== object2[key]) {return false;}
    //compares key:value pairs of both objects  
   }
   return true;
  }
    


// TEST CODE
const ab = { a: "1", b: ["2","3"] };
const ba = { b: ["2","3"], a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }) // => true

eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }) // => false
eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }) // => false

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);
