
/*let user = {
    name: "Jack",
    sayHello: function() {
      console.log(`Hello, ${this.name}!`);
    },
    sayDelayedHello: function() {
      let variable = 10
      setTimeout(function() {
        console.log(variable)
      }, 1000)
    }
  }
  user.sayDelayedHello() //this tulostaa 10
  */

/*let user2 = {
    name: "Jack",
    sayHello: function() {
      console.log(`Hello, ${this.name}!`);
    },
    sayDelayedHello: function() {
      console.log(this)
      setTimeout(function() {
        // console.log(this)
      }, 1000)
    }
  }
  user2.sayDelayedHello()//this referoi user2 muuttujaa */


/*let user3 = {
    name: "Jack",
    sayHello: function() {
      console.log(`Hello, ${this.name}!`);
    },
    sayDelayedHello: function() {
      console.log(this)
      setTimeout(function() {
        console.log(this)
      }, 1000)
    }
  }
  user3.sayDelayedHello() //This referoi globaalia muuttujaa*/


let user = {
    name: "Jack",
    sayHello: function() {
      console.log(`Hello, ${this.name}!`);
    },
    sayDelayedHello: function() {
      // THIS WORKS
      let thisWorks = this
      setTimeout(function() {
        // THIS DOES NOT WORK
        thisWorks.sayHello()
      }, 1000)
    }
  }
  user.sayDelayedHello()