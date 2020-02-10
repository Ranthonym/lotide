//function to find and rerun middle index value(s)
const middle = function(array) {
  let mid = [];
    if (array.length <= 2) {
    return mid;
  }
  mid.push(array[Math.floor((array.length - 1)/2)]);
  if (array.length % 2 === 0) {
    mid.push(array[Math.ceil((array.length - 1)/2)]);
  }
  return mid;
};

module.exports = middle;

