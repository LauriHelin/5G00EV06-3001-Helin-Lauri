const fs = require("fs")

fs.copyFile("index.js", "indexkopio.js", (err) => {if (err) throw (err); console.log("teksti kopioitu")})