
function outer (){
    let counter = 0;
    function incrementCounter (){
 counter ++; }
    return incrementCounter;
 }

const myNewFunction = outer();
myNewFunction();
myNewFunction();
console.log(myNewFunction());
console.log(myNewFunction.__proto__.counter)


const anotherFunction = outer();
anotherFunction();
anotherFunction();

console.log("===================================");

function display(data){console.log(data)}
function printHello(){console.log("Hello");}
function blockFor300ms(){
    for (let i = 0; i < 10000000; i++){
    }
    console.log("finished loop!");
 }
setTimeout(printHello, 0);
const futureData = fetch('https://imdb8.p.rapidapi.com/auto-complete')
futureData.then(display)
blockFor300ms()
console.log("Me first!");