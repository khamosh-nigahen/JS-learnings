// When you return a value in the then() method, the then() method returns a new Promise that immediately resolves to the return value.

let p = new Promise((resolve, reject) => {
    setTimeout(() => resolve(10), 3 * 1000)
})

p.then(result => {
    console.log(result)
    return result * 2
}).then (result => {
    console.log(result)
    return result * 3
}).then(result => {
    console.log(result)
})

console.log("#######################################");

// Also, you can return a new promise in the then() method, like this:

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(20), 3 * 1000)
})

p2.then(result => {
    console.log(result);
    return new Promise((resolve, reject) => {
        setTimeout(resolve(result * 2), 2 * 1000)
    })
}).then(result => {
    console.log(result);
    return new Promise((resolve, reject) => {
        setTimeout(resolve(result * 2), 1000)
    })
}).then(result => console.log(result))

// below one is not promise chaining
// In this example, we have multiple handlers for one promise. These handlers have no relationships. Also, they execute independently and don’t pass the result from one to another like the promise chain

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 4 * 1000);
});

p3.then((result) => {
    console.log(result); // 10
    return result * 2;
})

p3.then((result) => {
    console.log(result); // 10
    return result * 3;
})

p3.then((result) => {
    console.log(result); // 10
    return result * 4;
});

// Suppose that you want to perform the following asynchronous operations in sequence:

// First, get the user from the database.
// Second, get the services of the selected user.
// Third, calculate the service cost from the user’s services.

function getUser(userId) {
    return new Promise((resolve, reject) => {
        console.log('Get the user from the database.');
        setTimeout(() => {
            resolve({
                userId: userId,
                username: 'admin'
            });
        }, 1000);
    })
}

function getServices(user) {
    return new Promise((resolve, reject) => {
        console.log(`Get the services of ${user.username} from the API.`);
        setTimeout(() => {
            resolve(['Email', 'VPN', 'CDN']);
        }, 3 * 1000);
    });
}

function getServiceCost(services) {
    return new Promise((resolve, reject) => {
        console.log(`Calculate the service cost of ${services}.`);
        setTimeout(() => {
            resolve(services.length * 100);
        }, 2 * 1000);
    });
}

getUser(100)
    .then(getServices)
    .then(getServiceCost)
    .then(console.log);