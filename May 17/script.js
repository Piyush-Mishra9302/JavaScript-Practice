
// const person = {
//     name: "john",
//     age: 30,
//     city: "indore"
// };

// const { Children } = require("react");

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


//******************************************************************************* */
// Starting with + String

let str1 = "Vashu is a great coder";
let str2 = "    Mishra  ";

let newString = str1 + str2;
let newString2 = `${str1}${str2}`;
console.log(newString);
console.log(newString2);

//String methods
//** length */
let x;
x = str1.length;
console.log(x);

//** charAt() */

let y = str1.charAt(2);
console.log(y);

//** indexOf */

let z = str1.indexOf("a");
//it returns the first occurance of the character
console.log(z);

//** toUpperCase */
let upper = str1.toLocaleUpperCase();
let lower = str1.toLowerCase();

console.log(upper);
console.log(lower);

//**replace */

// let replace = str1.replace("vashu","Piyush");
// console.log(str1)

//includes -> Checks if the text present in the string

x = str1.includes("is");
console.log(x);

//trim -> removes the whitespace from starting and ending both
console.log(str2);
x = str2.trim();
console.log(x);

//slice -> ending index will not include, it returns a pease of a strig
//it will also take negative indexes
x = str1.slice(0, 6);
console.log(x);

//subString
//it is same as slice but not take negative indexes

//Concat
//use to add one string with another


let task = "developer"
let result = task.charAt(0).toUpperCase() + task.slice(1);

console.log(result);

//***Math object */
//Math.PI

let PI = Math.PI;
console.log(PI);

let squr = Math.sqrt(25);
console.log(squr);

//It returns -1 if negative and 1 if it is positive
let sign = Math.sign(34);
console.log(sign);

let power = Math.pow(2,6);
console.log(power);

let round = Math.round(45.67);
console.log(round);

let ceil = Math.ceil(3.1);
console.log(ceil);

let floor = Math.floor(66.99);
console.log(floor);

let trunc = Math.trunc(88.76543);
console.log(trunc);

let absolute = Math.abs(-344);
console.log(absolute);

let min = Math.min(44, -44);
console.log(min);

let random = Math.random();
console.log(random);



//generate a random value between 1 to 100
let randomVAlueOneToH = Math.floor(Math.random() * 101) + 1 ;
let randomVAlueOneToF = Math.floor(Math.random() * 51) + 1 ;
   
let sum, difference, product, quotient, reminder;

sum = randomVAlueOneToH + randomVAlueOneToF;
difference = randomVAlueOneToH - randomVAlueOneToF;
product = randomVAlueOneToH * randomVAlueOneToF;
quotient = randomVAlueOneToH / randomVAlueOneToF;
reminder = randomVAlueOneToH % randomVAlueOneToF;

console.log(`Sum is : ${sum}`);
console.log(`Difference is : ${difference}`);
console.log(`Product is : ${product}`);
console.log(`Quotient is : ${quotient}`);
console.log(`Reminder is : ${reminder}`);
