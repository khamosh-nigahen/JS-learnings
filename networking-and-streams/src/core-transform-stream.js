const fs = require('fs');
const Transform = require('stream').Transform

const upper = new Transform({
    transform: function (chunk, enc, next) {
        next(null, chunk.toString().toUpperCase())
        // uncomment this code and it woks similar to the above 1 line
        // this.push(chunk.toString().toUpperCase())
        // next()
    },
    flush: function () {
        console.log("Done!")
    }
})

fs.createReadStream(process.argv[2])
    .pipe(upper) // through makes a transform stream
    .pipe(process.stdout)



    // next(null, chunk.toString().toUpperCase()) // first argumrnt is err
