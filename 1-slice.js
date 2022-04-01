function slice(array, start, end) {
  let slicedArray = []; //1
  for (let i = start; i < end; i++) { //6
    slicedArray.push(array[i]); //2
  }
  return slicedArray; //1
}

module.exports = { slice };

/*
T(n)=1+(n-1)(6+2+1)
O(n)=n => complexite temporelle lineaire
*/