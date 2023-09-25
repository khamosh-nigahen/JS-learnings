const express = require("express");
const router = express.Router()

router.get("/", (req, res) => {
    res.send("All User List")
})

router.post("/new", (req, res) => {
    res.status(201).json({ message: "User created!"})
})

// router.get("/:userId", (req, res) => {
//     res.send(`Get User with Id: ${req.params.userId}`)
// })

// router.put("/:userId", (req, res) => {
//     res.send(`Modified User with Id: ${req.params.userId}`)
// })

// router.delete("/:userId", (req, res) => {
//     res.sendStatus(200)
// })

// all the 3 above routes for /:userId can be coded into one
router.route("/:userId")
.get((req, res) => {
    res.send(`Get User with Id: ${req.params.userId}`)
})
.put((req, res) => {
    res.send(`Modified User with Id: ${req.params.userId}`)
})
.delete((req, res) => {
    res.sendStatus(200)
})

// below code works as a middleware to the /users/:id path so we need to call next() otherwise it will stop forever
router.param("userId", (req, res, next, userId) => {
    console.log(req.params.userId)
    next()
})

module.exports = router;