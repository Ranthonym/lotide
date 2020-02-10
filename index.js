// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const takeUntil = require('./takeUntil');
const without = require('./without');
const map = require('./map');
const letterPositions = require('./letterPositions');
const flatten = require('./flatten');
const findKeyByValue = require('./findKeyByValue');
const findKey = require('./findKey');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');



module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  assertEqual: assertEqual,
  assertArraysEqual: assertArraysEqual,
  assertObjectsEqual: assertObjectsEqual,
  takeUntil: takeUntil,
  without: without,
  map: map,
  letterPositions: letterPositions,
  flatten: flatten,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  countOnly: countOnly,
  countLetters: countLetters
};