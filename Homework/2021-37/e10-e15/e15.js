String.prototype.isPalindrome = function(){
    var origin = this.toLowerCase().split('').join()
   var reverse = this.split('').reverse().join()
   console.log(origin)
   console.log(reverse)
   return origin == reverse
}

console.log("saippuakauppias".isPalindrome()) // true
console.log("abc".isPalindrome()) // false
