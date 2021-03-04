// Write a function, numberDoubler that takes in a number and continues doubling
// until the number is greater than or equal to 100.

// Examples:

// numberDoubler(51)  => 102
// numberDoubler(100) => 100
// numberDoubler(26)  => 104
function numberDoubler(num) {
  while (num < 100) {
    num *= 2;
  }
  return num;
}

// Write a function, stringRepeater that takes in a string and "repeats it"
// until the string's length is greater than or equal to 10.

// Examples:

// stringRepeater('abc')    => 'abcabcabcabc'
// stringRepeater('a')      => 'aaaaaaaaaa'
// stringRepeater('hotdog') => 'hotdoghotdog'
function stringRepeater(str) {
  let repeatedString = "";

  while (str.length <= 10) {
    str.concat(str);
    repeatedString = str;
  }
  return repeatedString;
}

// Write a function, makeDivisible, that takes in two numbers, x and y. The
// function should add one to x until it is divisble by y. Then return x.

// Examples:

// makeDivisible(9, 1)  => 9
// makeDivisible(9, 2)  => 10
// makeDivisible(11, 3) => 12
// makeDivisible(10, 3) => 12
// makeDivisible(5, 4)  => 8
// makeDivisible(16, 5) => 20
function makeDivisible(x, y) {
  // Your code here
}

module.exports = {
  numberDoubler,
  stringRepeater,
  makeDivisible,
};
