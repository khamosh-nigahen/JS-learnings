const user1 = Object.create(null)
// console.log(user1);

const func = {
    greet: function() {
        console.log("Hey buddy!")
    },
}

// const user2 = Object.create(func)
const user2 = Object.create(null)
user2.isdefined = true;
// user2.greet()

user2.hey = function () {
    return "hey!!"
}

console.log(user2.__proto__);
console.log(user2.prototype);

console.log(user2.__proto__ == Object.prototype);
// user2.prototype.write = function writeDone() {
//     return "Write Completed!"
// }

// console.log(user2.write());

console.log(user2.hey());
