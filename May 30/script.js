
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

const {name, age} = person;


function printName(){
    console.log(`My name is ${name} and I am ${age} years old`)
}

printName();