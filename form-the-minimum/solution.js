function minValue(values) {
  console.log(values);
  //your code here
  let min = Math.min(...values);
  if (min in values <= 0) {return false};

  values.filter((element1, element2) => {
    if (element1 !== min && element2 !== min && element1 !== element2) {
      return values.join('')
    }
    else {
      values.filter((element1, element2) => {
        if (element1 !== min && element2 !== min && element1 !== element2) {
          return values.join('')
        }

      });
    }
  });
}