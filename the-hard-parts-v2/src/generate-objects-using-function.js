// This way of doing is not recommended as it violates the DRY principle
// and we want to ad any new functionality in future we need to add it to all our objects created

function createUser(name, score) {
    const newUser = {};
    newUser.name = name;
    newUser.score = score;
    newUser.incrementScore = function () {
        newUser.score++
    }
    return newUser;
}

const user1 = createUser("Puneet", 10);
const user2 = createUser("Manav", 8);

console.log(user1)
console.log(user2)
user1.incrementScore()
user2.incrementScore()
console.log(user1)
console.log(user2)