// write a function that that takes a number and returns
// its factorial. example:
// `factorial(4)` // => 24 (4 * 3 * 2 * 1 = 24)

function myFactorial(num){
  var counter = 1;
  for (var i = num; i > 0; i--){
    counter *= i;
  } return counter;
}

console.log(myFactorial(6));
