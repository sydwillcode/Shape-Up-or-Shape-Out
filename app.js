document.addEventListener('DOMContentLoaded', function(){
const container = document.getElementById('shape-box');
const MAX = 600;

let rectWidth = document.getElementById('rec-width');
let rectHeight = document.getElementById('rec-height');
let rectBtn = document.getElementById('rec-insert');
rectBtn.addEventListener('click', (e) => {
    e.preventDefault();
    new Rectangle();
});

let sqLength = document.getElementById('sq-length');
let squareBtn = document.getElementById('sq-insert');
squareBtn.addEventListener('click', (e) => {
    e.preventDefault();
    new Square();
});

let circleRadius = document.getElementById('cir-radius');
let circleBtn = document.getElementById('cir-insert');
circleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    new Circle();
});

let triBtn = document.getElementById('tri-insert');
triBtn.addEventListener('click', (e) => {
    e.preventDefault();
    new Triangle();
});

class Shape{
    constructor(width,height){
        this.div = document.createElement('div');
        this.width = width;
        this.height = height;
        this.div.classList.add('shape');
        this.div.style.left = `${randomVal(0,MAX)}px`;
        this.div.style.top = `${randomVal(0,MAX)}px`;
        
        this.div.addEventListener('dblclick', () => this.removeShape());  
      } //end shape constructor
    removeShape(){
        container.removeChild(this.div)
    }  
} //end class shape

class Rectangle extends Shape{
    constructor(width,height){
        super(width, height);
        this.div.classList.add('rectangle');
        this.div.style.height = `${rectHeight.value}px`;
        this.div.style.width = `${rectWidth.value}px`;
        this.div.style.backgroundColor = 'green';
        container.appendChild(this.div);
    }
} // end Rectangle class

class Square extends Shape{
    constructor(width,height){
        super(width, height);
        this.div.classList.add('square');
        this.div.style.height = `${sqLength.value}px`;
        this.div.style.width = `${sqLength.value}px`;
        this.div.style.backgroundColor = 'red';
        container.appendChild(this.div);
    }
} // end Square class

class Circle extends Shape{
    constructor(radius){
        super (2*radius,2*radius)
        this.radius = circleRadius;
        this.div.classList.add('circle');
        this.div.style.height = `${this.circleDiameter()}px`;
        this.div.style.width = `${this.circleDiameter()}px`;
        this.div.style.backgroundColor = 'purple';
        container.appendChild(this.div);
    }

circleDiameter(){
    return (this.radius.value * 2)
}
} // end Circle class

class Triangle extends Shape{
    constructor(height){
        super ()
        this.height = height;
        this.div.classList.add('triangle');
        //this.div.style.height = `${this.trianglePerimeter()}px`;
        this.div.style.borderTopWidth = `${this.height}px`;
        this.div.style.borderRightWidth = `${this.height}px`;
        container.appendChild(this.div);
    }


} // end Triangle class


function randomVal(min, max){
    return Math.floor(Math.random()* (max - min)) + min;
}

}) //end of DOMCL