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

  // FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(firstObject, secondObject) {
  if (eqObjects(firstObject, secondObject)) {
    console.log(`✔️ ✔️ ✔️ Assertion Passed`);
  } else console.log(`❌❌❌ Assertion Failed`);
};

