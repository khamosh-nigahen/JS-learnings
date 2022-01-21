const fs = require("fs")

fs.writeFileSync("textFile.txt", "I love movies.")

const http = require("http")

const server = http.createServer(function (req, res) {
    const url = req.url

    if (url === "/profile") {
        res.setHeader("Content-Type", "text/html")
        res.write("Profile Page!")
        return res.end()
    }

    if (url === "/") {
        res.setHeader("Content-Type", "text/html")
        res.write("Home Page!")
        return res.end()
    }

    // if (url == "/settings") {
    //     res.setHeader("Content-Type", "text/html")
    //     res.write("<h1>Settings</h1> <form action=" / settings" method="POST"><input type="text"></input></form>")
    //     return res.end()
    // }

    res.write("Page not found!")
    res.end()
})

server.listen(8000, function () { console.log("Sever Listening on port: 8000") })


/**
 * When you use an html form <form></form>, if you refresh the page after submitting the form it tries to resubmit the form again
 * but if you press enter on the chrome url if again fetches the same page without submitting the form again 
 */

