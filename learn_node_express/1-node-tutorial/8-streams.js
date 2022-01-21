// streams operates on data sequentially

// streams extends EventEmitter class, hence we can use events with streams

// assume you have a huge file, so if u start processing it it will take a lot of memory
// and if u want to do it syncronously then a lot of time
// at this scenario we need streams


// create a big file of more than 2Mb and test the code

const { createReadStream } = require("fs")

const stream = createReadStream(filepath, {
    highWaterMark: 90000, // bytes size to read, default is 64kb
})

stream.on("data", (data) => {
    console.log(data)
})

stream.on("error", (err) => console.log(err))