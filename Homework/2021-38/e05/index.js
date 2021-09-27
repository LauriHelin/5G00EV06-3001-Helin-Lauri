const util = require('util');
const fs = require("fs");
var readlineSync = require('readline-sync');
const readFile = util.promisify(fs.readFile)


var name = readlineSync.question("give file name: ")
readFile(name, 'utf-8')
    .then(parseJson)
    .then((data)=>console.log(data))
    .catch(msg=>console.log(msg))


function parseJson (data) {
    function func (resolve, reject) {
        const obj = JSON.parse(data)
        if(data.includes("name") == true){
            resolve(data)
        }
        else{
             reject("file " + name + " includes json but not property name")
        }
        
    }
    const p = new Promise(func)
    return p
  }