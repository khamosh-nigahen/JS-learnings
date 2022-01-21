/**
 * I/O task are 2-3 times slower from CPU bound task and thats why its best for asynchronous behaviour
 *
 * I/O bound task ==> Use Tech like JavaScript
 * CPU bound task ==> Use Tech like Python
 *
 * CPU bound task can give great efficieny with threads and paralellism with cores but I/O bound task
 * are not very efficient with threads
 *
 *
 */

/**
 * console.log() is not in the browser JavaScript it is there in developer tools
 *
 * In Node, for developer convience console.log() u can use but under the hood it uses process.stdout.write() with doing somw more things
 * Visual difference between is console.log() prints with trailing "\n" but process.stdout.write() doesn't
 *
 */

/**
 * In Node scripts use #!/usr/bin/env node -> its good for different environments
 */

/**
 * util package has a method promisify which is used when a method needs a callback and you want that method to
 * return a promise
 *
 * Ex: util.promisify(myDB.all.bind(myDB))
 *
 */

function test() {
    console.log("test")
}

setTimeout(() => console.log("Done"), 20000)