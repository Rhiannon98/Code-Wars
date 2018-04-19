function formatWords(words) {

  if (!words) {return '';}
  words = words.filter(word => word !== '');
  let newString = '';

  words.forEach((word, i) => {
    if (words.length === 1) {newString = word;}
    else if (words.length - 1 === i) {newString += ' and ' + word;}
    else {
      if (i === 0) {newString = word;}
      else (newString += ', ' + word)
    }
  });
  return newString;
}