
// const person = {
//     name: "john",
//     age: 30,
//     city: "indore"
// };

// console.log(person.name);
// console.log(person.age);
// console.log(person.city);

// const numbers = [1,2,3,4,5,6];
// console.log(numbers, typeof numbers);

// console.log(numbers[3]);

// function greet (){
//     console.log("Hello world");
// }

// greet();

// console.log(typeof greet);

// === -> It compairs the values along with it's data type

//type conversion

// let num  = "100";
// num = true;
// num = Number (num);
// console.log(num, typeof num);

// let num1 = 300;
// num1 = num1.toString();
// console.log(num1, typeof num1);

//user input

// let fname = prompt("Enter your name");
// console.log(fname);

// let cityName = prompt("Enter your City");
// console.log(cityName);

// let courseName = prompt("Enter your Course");
// console.log(courseName);

// let a = parseInt(prompt("Enter A"));
// let b = parseInt(prompt("Enter B"));

// console.log("Multiplication : ", a * b);
// console.log("Addition :", a + b);
// console.log("Substraction :", a - b);
// console.log("division :", a/b);
// console.log("modulus :", a % b);



//call method / function borrowing
//*************************************** */

// let name = {
//     firstName: "Vashu",
//     lastName: "Mishra",
//     printFullName: function (){
//         console.log(this.firstName + " " + this.lastName);
        //every method in javaScript having access to "this" keyword
        // And here in this block "this" keyword points to the name object
//     }
// }

// name.printFullName();

// let name2 = {
//     firstName: "Piyush",
//     lastName: "Mishra"
// }

//Now againg we need to use printFullName method but againg writing it is a bad practice
// so this time we use "function borrowing" using call() method

// name.printFullName.call(name2);

// but in generally we can't write any function inside the object so
// let's write it outside the object and make it work for the same


let name = {
    firstName: "Vashu",
    lastName: "Mishra",
   
}

let printFullName = function (hometown, city){
        console.log(this.firstName + " " + this.lastName + " hometown is : " + hometown +" And City is : " + city);
    }

printFullName.call(name, "Lalpur", "Satna");
// in the call method the first parameter will always referenced to the "this" variable;

let name2 = {
    firstName: "Piyush",
    lastName: "Mishra"
}

//Now againg we need to use printFullName method but againg writing it is a bad practice
// so this time we use "function borrowing" using call() method

printFullName.call(name2, "Govindpura", "Bhopal");
printFullName.apply(name2, ["Govindpura", "Bhopal"]);

let printMyName = printFullName.bind(name2, "Govindpura", "Bhopal");
console.log(printMyName);
