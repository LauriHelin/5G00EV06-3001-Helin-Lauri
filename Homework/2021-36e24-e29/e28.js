
let user = {
    firstName: "Jack",
    sayHello: function() {
      console.log(`Hello, ${this.firstName}!`);
    }
  };

  let kopio = user.sayHello.bind(user)
  let myFunction = user.sayHello;
  myFunction();
  kopio();