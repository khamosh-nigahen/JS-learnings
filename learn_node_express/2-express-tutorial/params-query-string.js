const express = require("express")

const { products } = require("./data")

const app = express()

app.get("/api/products/:productId", (req, res) => {
    console.log(req.params)
    const { productId } = req.params

    const filterProduct = products.find((product) => product.id === Number(productId))

    if (!filterProduct) {
        res.status(400).send("Bad Params")
    }
    res.json(filterProduct)
})

app.get("/api/products/:productId/reviews/:reviewId", (req, res) => {
    // multiple params in url
    console.log(req.params) // here u will get reviewId as well
    const { productId } = req.params

    const filterProduct = products.find((product) => product.id === Number(productId))

    if (!filterProduct) {
        res.status(400).send("Bad Params")
    }
    res.json(filterProduct)
})

app.get("/api/v1", (req, res) => {
    console.log(req.query)
    const { search, limit } = req.query
    let sortedProducts = [...products]

    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            console.log(product.name);
            return product.name.startsWith(search)
        })
    }

    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }

    if (sortedProducts.length < 1) {
        // res.status(200).send("No Products matched your search")
        return res.status(200).json({ success: true, data: [] })
        // return is used because we do not want 2 response to send
    }
    res.status(200).json(sortedProducts)
    // res.send("Query params")
})

app.all("*", (req, res) => {
    res.status(404).send("Not Found")
})
app.listen(5000, () => {
    console.log("Welcome to Server!!");
})