const fs = require("fs")

fs.copyFile("es12.js", "e12kopio.js", (err) => {if (err) throw (err); console.log("teksti kopioitu")})