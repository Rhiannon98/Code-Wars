function solution(str) {
  let arrStr = str.split("");
  let newArr = [];

  for (let i in arrStr) {newArr.unshift(arrStr[i])}

  return newArr.join("")

}