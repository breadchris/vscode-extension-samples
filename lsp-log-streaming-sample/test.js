

function funcC(param1, param2) {
  var a, b, c;
  a = 1;
  return a;
}

function funcB(param1, param2) {
  var x = funcC(1, param2);
  return x + 1;
}

function funcA(param1, param2) {
  console.log(funcB(1, 2));
}
