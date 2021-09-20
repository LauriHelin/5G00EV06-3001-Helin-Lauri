class Dog{
    constructor(name, sniffButt){
    this.name = name
    this.sniffButt = this.sniffButt.bind(this)
    }
}

Dog.prototype.sniffButt = function() {          
    console.log(this.name + ' sniffs butt')
}

Dog.prototype.delayedSniffButt = function() {  
    setTimeout(this.sniffButt, 1000)
}

let spot = new Dog('spot')
let vilma = new Dog('vilma')
spot.sniffButt()
vilma.sniffButt()


spot.delayedSniffButt()
vilma.delayedSniffButt()