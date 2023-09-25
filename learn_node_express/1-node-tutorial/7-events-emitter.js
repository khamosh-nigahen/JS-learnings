const EventEmitter = require("events");

const customEmitter = new EventEmitter();


// customEmitter.emit("response") // uncomment the code and comment the last line
// here u wont get anything in console log because first u emitted the event then u r listening to it
// So it doesn't receive it.. Hence, none of the logs gets printed

// first listen to event and then fire the event

customEmitter.on("response", (name, id) => {
    console.log(`Data received ${name} with id ${id}`);
})

customEmitter.on("response", function () {
    console.log("Some other logic executed");
})

customEmitter.emit("response", "puneet", 11)

console.log(customEmitter.eventNames())
