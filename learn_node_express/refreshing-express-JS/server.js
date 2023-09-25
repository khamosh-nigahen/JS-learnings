const express = require("express");
const app = express();
const port = 3000;
const host =  "127.0.0.1";

app.set("view engine", "ejs");
app.use(express.static("public"))

// multiple middleware can be passed after the first argument of route
app.get("/", logger, (req, res, next) => {
    console.log(req.body)
    // res.status(200).json({message: "Server responded Hello!"})

    // send a file to be donwloaded
    // res.download('server.js')

    // render an html file
    // res.render("index")

    res.sendStatus(200).json({message: "Hello from Server!"})
}) 

app.use(logger)

const userRouter = require("./routes/users")

app.use("/users", userRouter)

function logger(req, res, next){
    console.log(req.originalUrl);
    next()
}

app.listen(port, host, () => {
    console.log(`Server lsitening on http://${host}/${port}`)
})