// ASSERTION FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️ ✔️ ✔️ Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);

};

const countLetters = function(string) {
  const results = {};
  string = string.split(" ").join("");
  for (const letter of string) {
    if (results[letter]) {
      results[letter]++;
    } else {
      results[letter] = 1;
      }
  }
  return results;
}





// TEST CODE
console.log(countLetters("lighthouse in the house"));
assertEqual(countLetters("lighthouse in the house").l, 1);