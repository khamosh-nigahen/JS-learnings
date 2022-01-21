// os module
console.log(" os module starts ======================================");

const os = require("os");

const user = os.userInfo()
console.log(user);

console.log(`System uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
}

console.log(currentOS);

// ================================================================================

const path = require("path");
console.log(" path module starts ======================================");
console.log(path.sep);

const filePath = path.join("./content", "subfolder", "text.txt")
console.log(filePath);

const basePath = path.basename(filePath);
console.log(basePath);

console.log(path.dirname(filePath));

const absolutePath = path.resolve(__dirname, filePath);
console.log(absolutePath)


// ===================================================================

console.log(" path module starts ======================================");

