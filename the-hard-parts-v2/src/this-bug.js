function createUser(name, score) {
    const newUser = Object.create(functionStore)
    newUser.name = name
    newUser.score = score
    return newUser
}

// uncomment the below code and check the buggy nature
// with the below code this will be  attached to the global window object

// const functionStore = {
//     increment: function () {
//         function add1() {
//             this.score++
//         }
//         add1()
//     }
// }

// below is the fix for the above in code.. which we use to do in older days of javascript

// const functionStore = {
//     increment: function () {
//         function add1() {
//             this.score++
//         }
//         add1.call(this)
//     }
// }

// fix the issue with the new way of doing it

const functionStore = {
    increment: function () {
        const add1 = () => {
            this.score++
        }
        add1()
    }
}

const user1 = createUser("Puneet", 4)
const user2 = createUser("Pranjal", 10)
user1.increment()
user2.increment()
console.log(user1);
console.log(user2);
