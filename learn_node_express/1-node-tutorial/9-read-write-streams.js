// create a big file of more than 2Mb and test the code

const { http } = require("http")
const { readFileSync, createReadStream } = require("fs")

http.createServer((req, res) => {
    const readStream = createReadStream(readFilepath, "utf8")
    const writeStream = writeReadStream(readFilepath)
    readStream.on("open", (data) => {
        readStream.pipe(writeStream)
    })

    readStream.on("error", (err) => console.log(err))
})