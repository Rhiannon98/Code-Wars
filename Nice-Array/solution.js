function isNice(arr) {
  console.log(arr);

  if (arr.length === 1) {return false;}
  if (arr.length === 0) {return false;}

  for (let i = 0; i < arr.length; i++) {

    let isNice = false;

    for (let j = 0; j < arr.length; j++) {

      if ((arr[i] + 1) === arr[j] || (arr[i] - 1) === arr[j]) {
        isNice = true;
        break;
      }

    } if (isNice === false) {
      return false;

    }
  }
  return true;

}