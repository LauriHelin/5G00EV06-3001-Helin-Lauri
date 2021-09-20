class Person{
    constructor(fname, lname){
        this.fname=fname
        this.lanem=lname
    }
}

var obj1 = new Person('jack', 'Smith')
console.log(obj1.fname)

var obj2 = Person('jack', 'smith')
console.log(obj2.fname)