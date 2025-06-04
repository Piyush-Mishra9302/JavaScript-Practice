
console.log("May 31");
//IIFE

// (
//     function(){
//         console.log("IIFE");
//     }
// )();

//Loops

// for, while, do-while, for in, for of, for each

// for (let i = 0; i <= 100; i++){
//     if(i % 2 ==0){
//         console.log(i)
//     }
// }
// for (let i = 0; i <= 100; i++){
//     if(i % 2 !=0){
//         console.log(i)
//     }
// }

// for in -> for object and array
// the JavaScript for in statement loops through the properties of an object
const person = {
    name: "John",
    age: 23,
    city: "Bhopal",
    state: "MP",
    country: "india"
}

// for(let x in person){
//     console.log(person[x]);
// }

//For Array

const numbers = [10,20,30,40,50];

// for (let a in numbers){
//     console.log(numbers[a]);
// }

const fruits = ["apple", "banana", "mango", "Kiwi"];

for(let f in fruits){
    // console.log(fruits[f]);
}

for(let fr = 0; fr < fruits.length; fr++){
    // console.log(fruits[fr]);
}

//For of --> Array and  For in -> object

let strin = "Suundayyyyyyyyyyyyyyyyy!!"
for(let str in strin){
    console.log(str)
}