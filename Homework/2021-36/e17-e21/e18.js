function Person(fname, lname) {
    this.fname = fname
    this.lname = lname
    console.log(this instanceof Person) //jos käyttää new keywordia, tuottaa tämä TRUE:n, jos ei, niin tuottaa FALSE:n
}

let tiina = new Person("Tiina", "Mattila");
let matti = new Person("Matti", "Perttilä");
let arto = new Person("Arto", "Mummola");
var obj = Person('jack', 'smith'); //undefined

console.log(tiina);
console.log(matti);
console.log(arto);
console.log(obj);