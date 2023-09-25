const fs = require("fs");

function useImportedtweets(errorData, data){
    const tweets = JSON.parse(data)
    // console.log(tweets);
    console.log(tweets.tweet1)
}
function immediately(){console.log("Run me last   ")}
function printHello(){console.log("Hello")}
function blockFor500ms(){
  // Block JS thread DIRECTLY for 500 ms
  // With e.g. a for loop with 5m elements
  for (let i = 0; i < 100000000; i++){

  }
  console.log("Loop finished!!");
}
setTimeout(printHello,0)
fs.readFile('./sample.json', useImportedtweets)
blockFor500ms()
console.log("Me first")
setImmediate(immediately) // will run first in the next iteration of the event loop
