function arrayContain(array, number) {
  for (let i = 0; i < array.length; i++) { //5
    if (array[i] === number) { //3
      return true; //1
    }
  }
  return false; //1
}

module.exports = { arrayContain };

/*
T(n)=(n-1)(5+3+1)+1
O(n)=n => complexite temporelle lineaire
*/