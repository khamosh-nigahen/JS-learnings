console.log("code before async");
setTimeout(function () {
  console.log("code in setTimeout");
}, 2000);
console.log("code after sync");

// older way
const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.eu/rest/v2/name/india");
request.send();

request.addEventListener("load", function () {
  //   console.log(this.responseText);
  const data = JSON.parse(this.responseText);
  console.log(data);
});

Promise.any(
  Promise.resolve("Success"),
  Promise.reject("Rejected"),
  Promise.resolve("Another success")
);
