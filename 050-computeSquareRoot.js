function computeSquareRoot(num) {
  //Babylonian method
  /* START SOLUTION */
  var numLength = num.toString().length;
  var x = numLength*100;
  while(x**(2) != num) {
      x = (1/2)*(x + (num/x));
      console.log(x);
  } return x;
  /* END SOLUTION */
}
