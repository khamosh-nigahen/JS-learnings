// sync file methods
const { readFileSync, writeFileSync, readFile, writeFile } = require("fs");

const data = readFileSync("./content/subfolder/text.txt", { encoding: "utf8", flag: "r" })

console.log(data);

writeFileSync("./content/new.txt", data, { flag: 'a+', encoding: "utf8" })

// async file methods

readFile("./content/new.txt", 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    writeFile("./content/async-new.txt", result, (err, result) => {
        if (err) {
            return;
        }
        console.log("done writing file")
    })
})


