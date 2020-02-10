const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns '5' for ['5']", () => {
    assert.deepEqual(tail(['5']), []); 
  });
  it("returns ['Labs'] for ['Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Lighthouse', 'Labs']), ['Labs']); 
  });
  it("returns ['Lighthouse', 'Labs'] for ['Hello', Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']); 
  });
  it("returns undefined for []", () => {
    assert.deepEqual(tail([]), []); 
  });
});
