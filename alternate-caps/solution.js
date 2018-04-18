function capitalize(s) {
  let upperCase = '';
  let lowerCase = '';

  for (let i in s) {

    if (i % 2 === 1) {
      upperCase += (s[i].toUpperCase());

    } else {
      upperCase += (s[i].toLowerCase());
    }
    i++
  }

  for (let i in s) {

    if (i % 2 === 0) {
      lowerCase += (s[i].toUpperCase());

    } else {
      lowerCase += (s[i].toLowerCase());
    }
    i++
  }

  return [lowerCase, upperCase];
};

// I went for what we (Timea, Katy, and I) understood much better