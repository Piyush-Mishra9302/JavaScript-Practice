const library = [
    {
        title: "Marvel",
        author: "author_marvel",
        status: {
            own: true ,
            reading: false,
            read: false
        }
    },
      {
        title: "DC",
        author: "author_DC",
        status: {
            own: true ,
            reading: false,
            read: false
        }
    },
      {
        title: "GOT",
        author: "author_GOT",
        status: {
            own: true ,
            reading: false,
            read: false
        }
    }
]

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

const {title:FirstBook} = library[0]

// console.log(library);

const jsonObject = JSON.stringify(library);
// console.log(jsonObject);

function display () {
    console.log( "Hello World" )
}
display();

function add (x,y){
    console.log(x + y);
}
add(10, 10);

function substract (x,y){
    return x - y;
}
let x = substract(20, 10);
console.log(x);

function multi (x,y){
    console.log(x * y);
}

function divide (x, y){
    return x / y;
}

let d = divide(100/10);
multi(10, 10);

function calculateCube(x){
    return x*x*x;
}

let g = calculateCube(5);
// alert(g);

function showName (){
    console.log("Vashu Mishra");
}
showName();