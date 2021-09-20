
class Person {
    constructor(name) {
        this.name = name
        this.drinkBeer = function() {
            console.log(this.name + " drinks beer")
        }
    }
    sayHello() {
        console.log('hello from ' + this.name)
    }
}

let jack = new Person('jack')
jack.sayHello()
let tina = new Person('tina')
tina.sayHello()
//drinkbeer and sayhello are both twice in the memory