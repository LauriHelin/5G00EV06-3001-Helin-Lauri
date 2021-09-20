
let user = {
    name: "Jack",
    sayHello: function() {
      console.log(`Hello, ${this.name}!`);
    }
  };


let myfunc = user.sayHello
myfunc()//antaa "Hello, undefined", sillä thissyHello funktiossa on globaali tässä kohtaa