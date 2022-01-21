function addNums(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
}

addNums.value = 5

addNums.prototype.func123 = () => { }

const user1 = new addNums(3, 5)
console.log(user1)
console.log(typeof user1)

// comment uncomment the below 2 lines and see the behaviour 
// user1.prototype.func678 = () => { }
user1.__proto__.func678 = () => { }

console.log(addNums);
console.log(user1);