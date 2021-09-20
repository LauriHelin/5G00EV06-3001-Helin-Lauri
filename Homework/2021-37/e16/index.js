class Circle{
    constructor(radius){
        this.radius=radius
    }
    get radius(){
        return this._radius
    }
    set radius(newRadius){
        if(newRadius>0){
        this._radius = newRadius
        } 
        else{
            throw new Error();
        }
    }
}
let c = new Circle(50) // sets radius
c.radius = 30          // changes radius, uses setter
console.log(c.radius)  // returns radius, uses getter
c.radius = -70         // crashes app, radius must be > 0
