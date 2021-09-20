let user = {
    name: "Jack",
    sayHello: function() {
      console.log(`Hello, ${this.name}!`);
    },
    sayDelayedHello: function() {
        setTimeout(() => { this.sayHello() }, 1000)
      //setTimeout(function() {
        //this.sayHello()
     // }, 1000)
    }
  }
  user.sayDelayedHello()

  /*tämä on vanhempaa syntaksia:
  -Bable muutti anonyymit funktiot sekä nuolisyntaksin normaaleiksi funktioksi,
   sillä vanhemmissa javascript versioissa ei ollut näitä ominaisuuksia käytössä
   -Käyttää myös muuta vanhaa syntaksia: "console.log("Hello, ".concat(this.name, "!"));" ja "_this"
         -concatenate linkittää this.name:n tekstiin, _this viittaa funktion ulkopuoliseen this:iin
  
  "use strict";

var user = {
  name: "Jack",
  sayHello: function sayHello() {                   
    console.log("Hello, ".concat(this.name, "!"));
  },
  sayDelayedHello: function sayDelayedHello() {
    var _this = this;

    setTimeout(function () {
      _this.sayHello();
    }, 1000); //setTimeout(function() {
    //this.sayHello()
    // }, 1000)
  }
};
user.sayDelayedHello(); */