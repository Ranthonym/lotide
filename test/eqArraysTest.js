const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// eqArrays FUNCTION ASSERTION TESTS
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true));
console.log(assertEqual(eqArrays(["1", "2", "3", "4"], ["1", "2", "3", 4]), false));