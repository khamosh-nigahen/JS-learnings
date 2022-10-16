// a mixin is a class containing methods that can be used by other classes without a need to inherit from it.

// mixin
let sayHiMixin = {
    sayHi() {
      console.log(`Hello ${this.name}`);
    },
    sayBye() {
      console.log(`Bye ${this.name}`);
    }
  };
  
  // usage:
  class User {
    constructor(name) {
      this.name = name;
    }
  }
  console.log(User)
  console.log(User.prototype)
  // copy the methods
  Object.assign(User.prototype, sayHiMixin);
  
  // now User can say hi
  const user1 = new User("Dude")
  user1.sayHi(); // Hello Dude!

  console.log(user1.__proto__)