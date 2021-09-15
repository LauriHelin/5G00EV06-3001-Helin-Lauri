
let user = {
    name: "Jack",
    sayHello: function() {
      console.log(`Hello, ${this.name}!`);
    }
  }

function sayHello() {
    user.sayHello();
}
  
  setTimeout(user.sayHello, 1000) //undefined, Koska kutsutaan funktiolla eikä oliolla
  setTimeout(sayHello, 1000) //toimii, sillä settimeout kutsuu funktiota joka kutsuu sisäfunktiota oliona

  setTimeout(() => user.sayHello(), 1000);

  user.sayHello = function() { console.log("does it work?"); }; //muuttaa kaiken does it work:iksi, sillä setTimeout on Asynchronous funktio

let f = user.sayHello
f() //Hello undefined