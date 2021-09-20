
var myFunc = new Function('', 'console.log("hello")') //luodaan funktio myFunc jonka tehtävä on tulostaa konsoliin "hello"
myFunc.call()//kutsutaan funktiota myFunc jolloin konsoliin tulostuu "hello"