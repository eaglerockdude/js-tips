// fibonacci recursive
/*By definition, the first two numbers in the Fibonacci sequence are either 1 and 1, or 0 and 1, depending on the chosen starting point of the sequence,
  and each subsequent number is the sum of the previous two.*/

function fib(n) {
  if (n < 2) {
    return n;
  }
    return fib(n-1) + fib(n-2)
}
 far = [1,2,3,4,5,6,7,8,9,10] ;

console.log('Starting Fib sequence from 1-10:') ;
far.forEach(element => {
console.log(fib(element));
});

console.log(far);







