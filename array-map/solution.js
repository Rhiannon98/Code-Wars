function double(array) {
  let newArr = [];

  for (var i = 0; i < array.length; i++) {
    newArr[i] = array[i] * 2;
  }
  return newArr;
}