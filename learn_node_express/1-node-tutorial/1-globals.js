// GLOBALS - NO WINDOW

console.log(__dirname);
console.log(__filename);
console.log(module);
console.log(require);
console.log(process);

setTimeout(() => {
    console.log("setTimeout");
}, 1000);

setInterval(() => {
    console.log("setInterval")
}, 1000);