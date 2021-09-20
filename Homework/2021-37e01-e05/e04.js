let user = {
    name: "Jack",
    sayHello: function() {
      console.log(`Hello, ${this.name}!`);
    },
    sayDelayedHello: function() {
        let kopio = this.sayHello.bind(user)
      //let f = this.sayHello
      setTimeout(kopio, 1000)
    }
  }

  user.sayDelayedHello()
  