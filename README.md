# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ranthonym/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual()`: checks for equality assertion of 2 non-object values
* `assertArraysEqual()`: checks for equality assertion of 2 arrays
* `assertObjectsEqual()`: checks for equality assertion of 2 objects
* `head`() : returns the first index element of an array
* `tail`() : returns array without the head element
* `middle()` : returns the middle index elements of an array
* `eqArrays()` : compares 2 arrays and returns a boolean value
* `eqObjects()` : compares 2 objects and returns a boolean value
* `takeUntil()` : take in source value and array, returns subset array with all values up to first instance of source value
* `without()` : take in source values and array, returns subset array without those source values
* `map()` : takes in a function argument and returns a mutated array
* `letterPositions()` : return all the indices (zero-based positions) in the string where each character is found.
* `flatten()` : takes in an array of arrays and returns a "flattened" version of the array.
* `findKey()` : takes in an object and a callback and returns the first key for which the callback returns a truthy value.
* `findKeyByValue()` : takes in an object and a value and returns the first key which contains the given value. 
* `countOnly()` : takes in a collection of string items and returns counts for a specific subset of those items.
* `countLetters()` : takes in a sentence (as a string) and then returns a count of each of the letters in that sentence.
