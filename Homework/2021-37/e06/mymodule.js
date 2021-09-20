function printName(){

console.log(`Hello, my name is Lauri`);
}

function sum(a,b){
    console.log(a+b)
}


let obj = { 'printName': printName, 'sum': sum }
module.exports = obj