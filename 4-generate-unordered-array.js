const { arrayContain } = require('./3-array-contain');

function generateUnorderedArray(size) {
  let array = []; //1
  for (let i = 0; i < size; i++) { //5
    let number = Math.floor(Math.random() * 100); //4
    while (arrayContain(array, number)) { //3
      number = Math.floor(Math.random() * 100); //4
    }
    array.push(number); //2
  }
  return array; //1
}

module.exports = { generateUnorderedArray };

/*
T(n)=1+(n-1)(5+4+3+4+2)+1
O(n)=n => complexite temporelle lineaire
*/