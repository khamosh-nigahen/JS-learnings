const net = require('net') // create a TCP connection

net.createServer(function (stream) {
    stream.pipe(stream)
}).listen(5000)