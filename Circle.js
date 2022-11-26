class Circle{
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    getRadius = function(){
        alert("Ban kinh hinh tron la " + this.radius)
    }
    getArea = function(){
        alert("Dien tich hinh tron là " + 3.14*this.radius*this.radius)
    }
}
let smallCircle = new Circle(2,"red");
console.log(smallCircle.getRadius());