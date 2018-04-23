function find_average(array) {
  // your code here
  if (array === [] || array === '') {return 0;}
  let arraySum = array.reduce(function (a, b) {return a + b;});
  return arraySum / array.length;

}