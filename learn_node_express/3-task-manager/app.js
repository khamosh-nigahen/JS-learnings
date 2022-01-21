console.log("Task Manager");
const express = require('express');
const tasks = require("./routes/task")
const connectDB = require("./db/connect")
require("dotenv").config()
const notFound = require("./middleware/not-found")
const errorHandler = require("./middleware/error-handler")

const app = express()
const PORT = process.env.PORT || 3000

//middlewares
app.use(express.static("./public"))
app.use(express.json())

app.use("/api/v1/tasks", tasks)
app.use(notFound)
app.use(errorHandler)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        console.log("Connected to DB");
        app.listen(PORT, () => {
            console.log(`Server listening on ${PORT}...`);
        })
    } catch (error) {
        console.log(error);
    }
}

start()
