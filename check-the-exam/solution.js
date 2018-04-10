"use strict";

function checkExam(array1, array2) {

  // creating score variable
  var score = 0;

  // for loop checking array2 to array1 both at i
  for (var i in array1) {
    if (array2[i].toLowerCase() === '') {
      score += 0;
    }
    if (array1[i].toLowerCase() === array2[i].toLowerCase()) {
      score += 4;
    }
    else if (array1[i].toLowerCase() !== array2[i].toLowerCase() && array2[i] !== '') {
      score--;
    }
  }
  if (score < 0) {
    return score = 0;
  } else {
    return score;
  }
}

checkExam();