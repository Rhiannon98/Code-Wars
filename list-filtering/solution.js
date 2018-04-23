// first i used
function filter_list(l) {
  // Return a new array with the strings filtered out
  return l.reduce(function (a, b) {
    if (typeof b === 'number') a.push(b);
    return a;
  }, []);
}
// second i used with the filter method in a way that i understood
function filter_list(l) {
  return l.filter(function (item) {
    return typeof item === 'number';
  });
}