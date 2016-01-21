function countUp(number, counter) {
  var outPut = [];
  for (var i = counter; i <= number; i += counter){
  outPut.push(i);
  }
  return outPut;
}
