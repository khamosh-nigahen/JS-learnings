
const concat = require('concat-stream')
const http = require('http')
const through = require("through2")
const qs = require('querystring')

const server = http.createServer(function (req, res) {
    console.log("Server Listening on 5000...")
    req
        .pipe(counter())
        .pipe(concat({ encoding: "string" }, onBody))

    function counter() {
        let size = 0
        return through(function (chunk, enc, next) {
            size += chunk.length
            if (size > 20) {
                res.end("ETOOBIG\n")
            } else {
                next(null, chunk)
            }
        })
    }

    function onBody(body) {
        let params = qs.parse(body)
        console.log(params)
        res.end("ok\n")
    }
})

server.listen(5000)

