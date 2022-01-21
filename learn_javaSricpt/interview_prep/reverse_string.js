// Reverse the string

// first solution
function reverse(str) {
  return str.split("").reverse().join("");
}

console.log(reverse("JavaScript"));

// second solution
function reverse_str(str) {
  // debugger;
  let reverse_str = "";
  for (let char of str) {
    reverse_str = char + reverse_str;
  }
  return reverse_str;
}

console.log(reverse_str("Learn"));

// third solution
function reverse_string(str) {
  return str.split("").reduce((reverse_str, char) => char + reverse_str, "");
}

console.log(reverse_string("Started"));
