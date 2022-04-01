const { slice } = require('./1-slice');
const { merge }= require('./2-merge');
const { generateUnorderedArray } = require('./4-generate-unordered-array');

function sort(array) {
  if (array.length <= 1) { //1
    return array; //1
  }
  const middle = Math.floor(array.length / 2); //4
  const left = slice(array, 0, middle); //4
  const right = slice(array, middle, array.length); //5
  return merge(sort(left), sort(right)); //3
}

const array = generateUnorderedArray(10); //2
console.log(array); //1
console.log(sort(array)); //2

/*
T(n)=1+1+4+4(n)+5(n)+3+2+1+2
O(n)=n => complexite temporelle lineaire
*/