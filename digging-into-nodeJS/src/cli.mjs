#!/usr/bin/env node

console.log(process.argv)
console.log(process.argv.slice(2))

// const path = require('path')
// const fs = require('fs')
// const getStdin = require('get-stdin')

import path from "path"
import fs from "fs"
import getStdin from "get-stdin"
import minimist from "minimist"

// minimist is the package for argument passing for the cli
// u can use Yargs package  also .. yargs is built on minimist and its a really nice package

// const args = require("minimist")(process.argv.slice(2), {
const args = minimist(process.argv.slice(2), {
    boolean: ["help", "in"],
    string: ["file"]
})
console.log(args)

if (args.file) {
    console.log(path.resolve(args.file));
    processFile(path.resolve(args.file))
    processFileAsync(path.resolve(args.file))
} else if (args.in || args._.includes("-")) {
    getStdin().then((content) => process.stdout.write(content.toString().toUpperCase())).catch(err => console.log(err))
    // console.log(await getStdin());
}

function processFile(filepath) {
    const contents = fs.readFileSync(filepath)
    // the passing of utf8 is bit less efiicient than the above one as a little processing is needed in this case
    // const contents = fs.readFileSync(filepath, "utf8") 

    //  see below both the streams to stdout... console log does modify the buffer into string
    // process.stdout does it differently
    console.log(contents)
    process.stdout.write(contents)
}

function processFileAsync(filepath) {
    fs.readFile(filepath, function onContents(err, contents) {
        if (err) {
            process.stdout.write(err)
        } else {
            const capitalize = contents.toString().toUpperCase()
            process.stdout.write(capitalize)
        }
    })

}

