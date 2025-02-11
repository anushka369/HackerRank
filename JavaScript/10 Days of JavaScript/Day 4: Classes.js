class Polygon 
{
    constructor(sides) 
    {
        this.sides = sides;
    }

    perimeter() 
    {
        return this.sides.reduce((acc, side) => acc + side, 0);
    }
}

const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());

// Link to the problem: https://www.hackerrank.com/challenges/js10-class/problem?isFullScreen=true/
