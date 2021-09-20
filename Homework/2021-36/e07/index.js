function repeat(text= "undefined", times=1){
   text = text.repeat(times)
   return text
}
console.log( repeat("moi") ) // outputs "moi"
console.log( repeat("moi", 4) ) // outputs "moimoimoimoi"