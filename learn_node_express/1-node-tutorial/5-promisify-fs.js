const { readFile, writeFile } = require("fs")

function getText(path) {
    return new Promise((resolve, reject) => {
        readFile(path, "utf8", (err, data) => {
            if (err) {
                reject(err)
            }
            resolve(data)

        })
    })
}

function writeText(path, data) {
    return new Promise((resolve, reject) => {
        writeFile(path, data, (err, res) => {
            if (err) {
                reject(err)
            }
            resolve(res)
        })
    })
}

// getText("./content/subfolder/text.txt")
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

getText("./content/subfolder/text.txt")
    .then(data => {
        writeText("./content/async-promise.txt", data).then(res => console.log("done!"))
    })
    .catch(err => console.log(err))