const fs = require("fs")

fs.readFile("e11.js", "utf-8", (err, data) => {fs.writeFile("e11kopio.js", data, () => console.log("tiedosto kopioitu"))})
