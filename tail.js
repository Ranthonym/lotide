//Assert Equal function
const assertEqual = require('./assertEqual');

//tail function: returns all array values except head value
const tail = function(inputArray) {
  return inputArray.slice(1);
};



module.exports = tail;
