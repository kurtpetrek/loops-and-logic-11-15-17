function checkForPalindrome(str) {
  var tester = str;
  tester = tester.split("");
  tester = tester.reverse();
  tester = tester.join("");
  if (tester === str) {
    return true;
  } else {
    return false;
  }
}

checkForPalindrome("bobo");

var myArr = [1, 2, 3, 4, 5, 6, 7, 8];
// Returns how many elements are within the array
myArr.length;

// Returns the last element within the array
myArr[myArr.length - 1];

for (var x = 0; x < myArr.length; x++) {
  console.log(myArr[x]);
}
