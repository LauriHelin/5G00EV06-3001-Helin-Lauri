function doIt(){
    let hello = "Hello World!";

    function inner() {
        console.log(hello);
    }
    return inner();
}

let f = doIt();
f();