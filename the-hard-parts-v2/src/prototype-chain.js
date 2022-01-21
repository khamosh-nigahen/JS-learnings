
function userCreater(name, score) {
    const newUser = Object.create(userFunctions)
    newUser.name = name
    newUser.score = score
    return newUser
}

const userFunctions = {
    increment: function () { this.score++ },
    login: function () { console.log("Logged In") }
}

const user1 = userCreater("Puneet", 100)
const user2 = userCreater("Jogi", 80)
user1.increment()
console.log(user1)
