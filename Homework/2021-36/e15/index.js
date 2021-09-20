function makeAdder(){
    let x = 0;
    function inner(){
       a = x + a
    }
return inner();
}


let add5 = makeAdder(5);
var add10 = makeAdder(10);
console.log(add5(2));  // 7
console.log(add10(2)); // 12
