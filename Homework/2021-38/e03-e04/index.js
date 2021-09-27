const fs = require("fs")
var readlineSync = require('readline-sync');

var name = readlineSync.question('give file name: ');
fs.readFile(name,"utf-8", (err,data)=>{
    if(data == undefined){
        console.log("file " + name + " does not exist");
    }
    else{
        try {
            const obj = JSON.parse(data)
            if(data.includes("name") == true){
                console.log("The content of the file is: ")
                console.log(data);
                console.log('the value of the object "name" is: ' + obj["name"])
                }
                else{
                    console.log("file " + name + " includes json but not property name");
                }
             } catch (err) {
            console.log(`file ${name} does not contain json`)
            } 
    
}})
