import express from "express"
import bp from "body-parser"
import morgan from "morgan"

const db = []

const app = express()

app.use(bp.urlencoded({ extended: true }))
app.use(bp.json())
app.use(morgan())

app.post("/todo", (req, res) => {
    console.log(req)
    const newTodo = {
        id: Date.now(),
        text: req.body.text
    }

    db.push(newTodo)

    res.status(201)
    res.json(newTodo)
})

app.get("/todo", (req, res) => {
    res.json(db)
})

app.listen(8000, () => {
    console.log("Server On")
})