const shuffle = require("../src/shuffle");

test('should run', () =>{
  expect(2).toEqual(2)
})

describe("shuffle should...", () => {
  test('shuffle returns an array',()=>{
    let shuffleArray = copyArray(testData.array)
    expect(typeof shuffleArray).toBe('[]')
  })
  test('shuffle array are the same length',()=>{
    let sameLengthArray = array.length(testData.array)
    expect(typeof sameLengthArray).toEqual('array.length')
  })
});





