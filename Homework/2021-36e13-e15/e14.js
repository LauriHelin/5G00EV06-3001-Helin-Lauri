function doIt(x){
    if(x == true){
        return()=> console.log('world!')
    }
    else if(x == false){
        return()=>console.log("hello")
    }
}
doIt(false)(); // outputs hello
doIt(true)();  // outputs world