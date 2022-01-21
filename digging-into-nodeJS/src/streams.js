#!/usr/bin/env node

// undertand the below code

// const stream1; // readable stream
// const stream2; // writable stream
// const stream3;

// //chaining streams
// const streamFinal = stream1.pipe(stream2).pipe(stream3);

/**
 * So, above code return of a .pipe() method is always a readable stream
 * Hence, streamFinal is a readable stream
 *
 * pattern -> readableStream.pipe(writableStream) you get back readableStream
 */


const path = require('path')
const fs = require('fs')
const Transform = require('stream').Transform
const zlib = require("zlib")

// minimist is the package for argument passing for the cli
// u can use Yargs package  also .. yargs is built on minimist and its a really nice package

const args = require("minimist")(process.argv.slice(2), {
    boolean: ["in", "compress"],
    string: ["file", "outfile"]
})

// console.log(args);

let OUTPATH;
if (args.outfile) {
    OUTPATH = path.resolve(args.outfile)
}

function streamComplete(stream) {
    return new Promise(function c(res) {
        stream.on("end", res)
    })
}

if (args.file) {
    const filePath = path.resolve(args.file)
    processFile(fs.createReadStream(filePath))
        .then(function z() {
            console.log("Complete!")
        })
        .catch(err => console.log(err))
} else if (args.in || args._.includes("-")) {
    processFile(process.stdin)
        .then(() => {
            console.log("Complete!")
        })
        .catch(err => console.log(err))
}

async function processFile(inStream) {
    var stream = inStream

    if (args.uncompress) {
        const gunZip = zlib.createGunzip()
        stream = stream.pipe(gunZip)
    }

    var upperCaseTransform = new Transform({
        transform(chunk, encoding, callback) {
            this.push(chunk.toString().toUpperCase())
            // setTimeout(callback, 500) // for testing it is coming in chunks
            callback()
        }
    })

    stream = stream.pipe(upperCaseTransform)

    if (args.compress) {
        const gZip = zlib.createGzip()
        stream = stream.pipe(gZip)
        OUTPATH = `${OUTPATH}.gz`
    }

    var outStream;
    if (args.outfile) {
        outStream = fs.createWriteStream(`${OUTPATH}`)
    } else {
        outStream = process.stdout
    }

    stream.pipe(outStream)
    await streamComplete(stream)
}
