// old way of creating objects iusing functions

function userCreator(name, score) {
    this.name = name;
    this.score = score;
}

userCreator.prototype.increment = function () {
    this.score++
}

userCreator.prototype.login = function () {
    console.log("login");
}

const user1 = new userCreator("Puneet", "10")
user1.increment()
console.log(user1)

// the above implementation using classes
// under the hood it works same exactly same

class UserCreator {
    constructor(name, score) {
        this.name = name
        this.score = score
    }

    increment() { this.score++ }

    login() { console.log("login"); }
}

const user2 = new UserCreator("Punnu", "20")
user2.increment()
console.log(user2);
