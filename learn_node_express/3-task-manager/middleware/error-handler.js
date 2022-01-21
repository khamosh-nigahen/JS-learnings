const errorHandler = (err, req, res, next) => {
    res.status(500).json({ msg: "Something went wrong!!!" })
    // res.status(500).json({ err: err })
}

module.exports = errorHandler