function insertDash(num) {
  var numContainer = num.toString().split('').join('-').split('');
  for (var i = 1; i < numContainer.length - 1; i = i + 2) {
    if (numContainer[i - 1] % 2 === 0 || numContainer[i + 1] % 2 === 0) {
      numContainer[i] = '';
    }
  }

  numContainer = numContainer.join('');
  return numContainer;
}