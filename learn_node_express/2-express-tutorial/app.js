const express = require("express")

const app = express()

// req => middleware => res


const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time);
    next()
    // res.send("Testing")

    // Either u terminate it by res.send() or send it to next middleware with calling next()
}

const customMiddleware = (req, res, next) => {
    console.log("Custom middleware");
    req.content = { age: 23, role: "Developer" }
    next()
}

// app.use("/api", customMiddleware) // middleware for specific path

app.use([logger, customMiddleware])

app.get("/", (req, res) => {
    res.send("Home")
})

// order matters here, because if u do thi after then it will not work for that route
// in this case for home page middleware will not work 

// app.use(logger) // uncomment the code 

// for logger express will supply 3 arguments req, res, next by default we dont have to pass
// we just need to access it in middleware


app.get("/about", (req, res) => {
    const content = req.content
    res.send(content)
})

app.get("/api/products", (req, res) => {
    res.send("Products")
})
app.get("/api/items", (req, res) => {
    res.send("Items")
})

const anyMiddleware = () => { }
const againMiddleware = () => { }
// for multiple middlewares for single route
app.get("/api/cart", [anyMiddleware, againMiddleware], (req, res) => {
    res.send("Items")
})

app.get("*", (req, res) => {
    res.status(404).send("Page Not Found!!")
})

app.listen(5000, () => {
    console.log("Welcome to Server!!");
})