// ASSERTION FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️ ✔️ ✔️ Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);

};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) { 
  // increment the counter for each item:
  // set a property with that string key to:
  // the value that was already there (or zero if nothing there) with 1 added to it.
  if (itemsToCount[item]) { 
    if (results[item]) {
      results[item] += 1;
    } else {
      results[item] = 1;
      }
    }
  }
  return results;
};




// TEST CODE
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);