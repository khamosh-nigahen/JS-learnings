import { readFile, writeFile } from "fs/promises";

process.on("uncaughtException", (err) => { console.log(err) })

// for promises

// const result = readFile(new URL("./test.html", import.meta.url), "utf-8")
const result = readFile(new URL("./test.htm", import.meta.url), "utf-8")
result.then((res) => { console.log(res) }).catch((err) => { console.log(err) })

// for await
// await can work without async in node if it is in global space

try {
    // const res = await readFile(new URL("./test.html", import.meta.url), "utf-8")
    const res = await readFile(new URL("./test.htm", import.meta.url), "utf-8")
    console.log(res)
} catch (e) {
    console.log(e)
}

// process.on will get this err becaue lets say below code is a third party library
// but it will exit  but for debugging u can check that
// what error is has thrown when the server crahsed
const resp = readFile(new URL("./test.htm", import.meta.url), "utf-8")