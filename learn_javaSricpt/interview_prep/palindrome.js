// check for palindrome

// 1st solution
const palindrome = (str) => {
  reversed = str
    .split("")
    .reduce((reverse_str, char) => char + reverse_str, "");
  return str === reversed;
};
console.log(palindrome("abba"));
console.log(palindrome("jest"));

// 2nd solution (Case Sensitive)
const palindrome2 = (str) => {
  reversed = str.split("").reverse().join("");
  //   debugger;
  return str.toLowerCase() === reversed.toLowerCase();
};
console.log(palindrome2("Radar"));
console.log(palindrome2("jest"));

// 3rd solution
const palindrome3 = (str) => {
  return str.split("").every((char, index, arr) => {
    // debugger;
    while (index <= arr.length) {
      return char === arr[arr.length - (index + 1)];
    }
  });
};

console.log(palindrome3("dad"));
console.log(palindrome3("mocha"));
