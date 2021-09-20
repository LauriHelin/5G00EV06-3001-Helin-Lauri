
function doIt() {
    console.log(this)
    console.log(this == global)
    globaali = "hello"
 }

 doIt();
 console.log(globaali)