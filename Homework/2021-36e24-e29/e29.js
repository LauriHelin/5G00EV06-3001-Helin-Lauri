
function helper() {
    user.sayHello()
  }
  let user = {
    name: "Jack",
    sayHello: function() {
        console.log(`Hello, ${this.name}!`);
    },
    sayDelayedHello: function() {
      setTimeout(helper, 1000)
    }
  }
  user.sayHello()
  user.sayDelayedHello() //toimii, sillä setDelayedHello kutsuu funktiota joka kutsuu sisäfunktiota oliona