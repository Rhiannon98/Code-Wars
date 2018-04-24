function cubeOdd(arr) {
  // insert code here >.<
  let i = arr.map(x => Math.pow(x, 3));
  if (i.includes(NaN)) {return undefined;}

  i = i.filter(elem => elem % 2 !== 0);

  if (i.length < 1) {return 0;}

  return i.reduce((acc, el) => acc + el, 0);

}