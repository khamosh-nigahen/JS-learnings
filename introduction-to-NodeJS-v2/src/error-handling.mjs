import { readFile, writeFile } from "fs";


// below code is for callbacks

// readFile(new URL("./test.html", import.meta.url), "utf-8", (err, res) => {
readFile(new URL("./test.htm", import.meta.url), "utf-8", (err, res) => {
    if (err) {
        console.log(err)
    } else {
        console.log(res)
    }
})

