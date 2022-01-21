const { readFile, writeFile } = require("fs")
const util = require("util")

const readFilePromisify = util.promisify(readFile)
const writeFilePromisify = util.promisify(writeFile)

// function getText(path) {
//     return new Promise((resolve, reject) => {
//         readFile(path, "utf8", (err, data) => {
//             if (err) {
//                 reject(err)
//             }
//             resolve(data)

//         })
//     })
// }

// function writeText(path, data) {
//     return new Promise((resolve, reject) => {
//         writeFile(path, data, (err, res) => {
//             if (err) {
//                 reject(err)
//             }
//             resolve(res)
//         })
//     })
// }

async function run() {
    try {
        const data = await readFilePromisify("./content/subfolder/text.txt", "utf8")
        await writeFilePromisify("./content/async-await.txt", data)
    } catch (err) {
        console.log(err);
    }
}

run()