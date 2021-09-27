/*function calculate(a,b){
    function asyncToiminto(resolve, reject){
        setTimeout(()=>{
            if(b!=0){
                let s= a / b;
                resolve(s);
            }
            else{
                reject("ei nollalla saa jakaa");
            }
        }, 1000);
    }

    let lupaus = new Promise(asyncToiminto);
lupaus.then((result)=> console.log(result))
    
}

calculate(10,2)
.then((result)=> calculate(result, 0))
.then((result)=> console.log(result))
.catch((err) => console.log(err));*/

const fs = require("fs");

fs.readFile("tunti.js","utf-8", (err,data)=>{
    console.log(data)
});

function lueTiedosto(path){
    function f(resolve, reject){
        fs.readFile(path, "utf-8", (err,data)=>{
            if(err){
                reject("epäonnistui");
            } else{
                resolve(data);
            }
        });
    }
    return new Promise(f);
}

function talletaTiedosto(path, content){
    return new Promise((resolve, reject)=>{
        fs.writeFile(path,content,(err)=>{
            if(err){
                reject("epäonnistui");
            } else{
                resolve("Tallennus onnistui");
            }
        });
    });
}

lueTiedosto("tunti.js")
    .then((data)=>talletaTiedosto("tunti2.js", data))
    .then((result)=>console.log(result))
    .catch((err)=>console.log(err));