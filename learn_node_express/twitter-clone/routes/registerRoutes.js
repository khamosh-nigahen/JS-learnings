const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const router = express.Router()

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
app.use(express.json())


router.get("/", function (req, res, next) {
    res.status(200).send("Register Page")
})

router.post("/", function (req, res, next) {
    console.log(req.body)
    const firstName = req.body.firstName.trim()
    const lastName = req.body.lastName.trim()
    const username = req.body.username.trim()
    const email = req.body.email.trim()
    const password = req.body.password

    if (firstName && lastName && username && email && password) {
        res.status(200).send("Valid Data, User Registered")
    } else {
        res.status(400).send("Bad request body")
    }
})

module.exports = router