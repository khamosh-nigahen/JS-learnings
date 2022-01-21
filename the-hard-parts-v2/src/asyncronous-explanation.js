// Run the below code in browser

function display(data) {
    console.log(data)
}

function printHello() {
    console.log("Hello!!")
}

setTimeout(printHello, 0)

function blockFor300sec() {
    var now = new Date().getTime();
    while (new Date().getTime() < now + 300) {
        // do nothing
    }
}

const futureData = fetch("https://reqres.in/api/users?page=2")
futureData.then(display)

blockFor300sec()
console.log("Me First!!")