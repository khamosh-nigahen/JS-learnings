const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.write("Hello Welcome to the APP")
        res.end()
    }
    else if (req.url == "/about") {
        res.write("A short history")
        res.end()
    } else {
        res.write(`<h1>Oops!!</h1> <a href = "/">Back Home</a> `)
        res.end()
    }
});

server.listen(5000);