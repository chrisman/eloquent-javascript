/*
FizzBuzz

Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/

function fizzbuzz(n) {
  if ((n % 3 === 0) && (n % 5 === 0)) {
    return 'FizzBuzz';
  }
  if (n % 5 === 0) {
    return 'Buzz';
  }
  if (n % 3 === 0) {
    return 'Fizz';
  }
  return n;
}

function gofb (n) {
  for (var i = 1; i <= n; i++) {
    console.log(fizzbuzz(i));
  }
}

gofb(100);
