// Log every number from 0 to 100, including 0 and 100, but if the number is evenly divisible by 3 log 'fizz' instead, if the number is evenly divisible by 5 log 'buzz' instead, if the number is evenly divisible by 3 and 5 log 'fizzbuzz' if it is not evenly divisible by either 3 or 5 log the number

// BONUS

// Reverse an array
// or
// Create a function that tests if a string is a palindrome

for (var x = 0; x <= 100; x++) {
  if (x === 0) {
    console.log(x);
  } else if (x % 3 === 0 && x % 5 === 0) {
    console.log("fizzbuzz");
  } else if (x % 5 === 0) {
    console.log("buzz");
  } else if (x % 3 === 0) {
    console.log("fizz");
  } else {
    console.log(x);
  }
}

var y = 0;
while (y <= 100) {
  if (y === 0) {
    console.log(y);
  } else if (y % 3 === 0 && y % 5 === 0) {
    console.log("fizzbuzz");
  } else if (y % 3 === 0) {
    console.log("fizz");
  } else if (y % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(y);
  }
  y++;
}

// for (var x = 0; x <= 100; x++) {
//   var msg = x;
//   if (x % 3 === 0) {
//     msg = "fizz";
//   }
//   if (x % 5 === 0) {
//     msg = msg === x ? "buzz" : msg + "buzz";
//   }
//   console.log(msg);
// }
