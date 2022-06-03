var rect = require('./rectangle')

function solveRect(l,b){
    console.log("solving for rectangle with l =");

    if(l <=0 || b <=0){
        console.log("rectangle dimension should be greather than 0")
    }
    else{
        console.log("the area of the rectangle is " + rect.area(l,b);
        console.log("the perimiter is" + rect.perimeter(l,b);
    }
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
