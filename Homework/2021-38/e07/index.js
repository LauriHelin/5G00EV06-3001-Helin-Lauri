const util = require('util');
const fs = require("fs");
var readlineSync = require('readline-sync');
const readFile = util.promisify(fs.readFile)


var name = readlineSync.question("give file name: ")
readFileAndParse(name)
    .then((data)=>console.log(data))
    .catch(msg=>console.log(msg))


    function readFileAndParse (name) {
    async function func (resolve, reject) {
        var data = await readFile(name, 'utf-8')
        const obj =  await JSON.parse(data)
         if(await data.includes("name") == true){
           await resolve(data)
        }
        else{
             await reject("file " + name + " includes json but not property name")
        }
    }
    const p = new Promise(func)
    return p
  }