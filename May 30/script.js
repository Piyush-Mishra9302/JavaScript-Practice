
// function display(){
//     let a = prompt("ENter your name : ");
//     return a
// }

// let r = display();
// console.log(r); 

const person = {
    name : "Harry",
    age : 23
};
const person2 = {
    name : "Rayan",
    age : 28
};

// const {name, age} = person;


function printName(user){
    console.log(`My name is ${user.name} and I am ${user.age} years old`)
}

printName(person);
printName({
    name : "Rayan",
    age : 28
})

//QUestion -- 1


//Question -- > 2

// function larger (x, y){
//     if(x > y){
//         return x;
//     } else{
//         return y;
//     }
// }

// let larg =larger(5,6);
// console.log(larg);

//Question --> 3

// function evenOdd (num)  {
//     if(num%2 == 0){
//         return "Even";
//     } else{
//         return "Odd"
//     }
// }

// let numbr = evenOdd(32);
// console.log(numbr);

//Question --> 4

//Question 5
//°C × 9/5) + 32

// function celToF (temp){
//     let convert = ((temp * 9) / 5) + 32 
//     return convert;
// }
// let converted = celToF(41);
// console.log(converted);

//Function expression

// let name = function(){
//     Code to be 
// }

//Arrow function

let celToF = (temp) => {
    let convert = ((temp * 9) / 5) + 32 
    return convert;
}

 let converted = celToF(41);
 console.log(converted);

// function square (num){
//     return num * num;
// }

// let squaree = square(25);
// console.log(squaree);

const square = (num) => {
 return num * num;
}
let squaree = square(25);
console.log(squaree);

const evenOdd = (num) => {
     if(num%2 == 0){
        return "Even";
    } else{
        return "Odd"
    }
}

 let numbr = evenOdd(32);
 console.log(numbr);

 const larger = (x, y) =>{
     if(x > y){
        return x;
    } else{
        return y;
    }
 }
 
 let larg =larger(5,6);
 console.log(larg);

 
// function sum (x, y){
//     let sum = x + y;
//     return sum;
// }




const sum = () => {
     let sum = x + y;
    return sum;
}
let s =sum(25, 25);
console.log(s);