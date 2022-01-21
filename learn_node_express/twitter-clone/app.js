const express = require("express")
const app = express()
const port = 8000
const requireLogin = require("./middleware")
const loginRouter = require("./routes/loginRoutes")
const registerRouter = require("./routes/registerRoutes")
const bodyParser = require("body-parser")

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
app.use(express.json())

app.use("/login", loginRouter)
app.use("/register", registerRouter)

app.get("/", requireLogin, function (req, res, next) {
    res.status(200).send("Home Page!")
})

app.listen(port, function () { console.log("Server Started!") })

