const fs = require('fs');
const through = require('through2')

process.stdin
    .pipe(through(upper)) // through makes a transform stream
    .pipe(process.stdout)

function upper(chunk, enc, next) {
    next(null, chunk.toString().toUpperCase()) // first argumrnt is err
}