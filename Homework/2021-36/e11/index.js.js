const fs = require("fs")

fs.readFile("index.js", "utf-8", (err, data) => {fs.writeFile("indexkopio.js", data, () => console.log("tiedosto kopioitu"))})
