

// const arr = new Array();

// arr[0] = "Apple";
// arr[1] = "Mango";
// arr[3] = "Banana"
// console.log(arr);

// const arr1 = Array.from("1234");
// console.log(arr1);

//Array Methods

//push
// const numbers = [10, 20, 30, 40];
// numbers.push(60);
// console.log(numbers);

//pop

// numbers.pop();
// console.log(numbers);

//shift -> remove element from the start

// numbers.shift();
// console.log(numbers);

//unshift -> add and element to the start

// numbers.unshift(10);
// console.log(numbers);

//reverse -> to reverse the array

// numbers.reverse();
// console.log(numbers);

//.length
// let x ;
// x = numbers.length;
// console.log(x);

// includes  -> checks the element is included or not.

// x = numbers.includes(40);
// console.log(x);

//indexof -> returns the index number of the element 

// x =numbers.indexOf(20);
// console.log(x);

// toString, join -> convert array into string

// x = numbers.toString();
// let y = numbers.join();

// console.log(x);
// console.log(y);

// split -> convert string into array

// x = x.split(",")
// console.log(x)

//slice

// x = numbers.slice(0, 3);
// console.log(x);

// x = numbers.slice(1);
// console.log(x)

//splice -> works like splice except it takes the starting index and
// the number element to remove
// alsp it's mutates the original string

// x = numbers.splice(0,0,100,200,300,400);

// console.log(numbers);
// console.log(x);
// console.log(numbers[0]);

// channing array methods
// console.log(numbers);

// x = numbers.slice(1, 4).toString().charAt(0);
// console.log(x)

// const fruits = ["Apple", "Cherry", "Kiwi"];
// const veggies = ["Tomato", "cauliflower", "cucumber"];

// const mixed = fruits.concat(veggies);
// console.log(mixed);

// spread operator (...)  copies a part of an array or complete
//array to another operator

// const newBasked = [...fruits, ...veggies];
// console.log(newBasked);

//Destructuring -> puttings the elements of an array into variables

// const array = [1,2,3,4,5,6,7,8];

// const [a,b,c,d, ...rest] = array;

// const numbers = [10,20,30,40,50,60];

// const [a,b,...rest] = numbers ;

// let add = a + b + rest.reduce((acc, value) => acc + value, 0);
// // console.log(add);

// const fruits = ["Apple", "Mango", "Banana"];
// fruits.push("kiwi", "Grapes");
// // console.log(fruits);

// fruits.shift();
// // console.log(fruits);

// let check = fruits.includes("Banana");
// // console.log(check);

// let y = fruits.join("-");
// // console.log(y);

// const fruits1 = ["Apple", "Cherry", "Kiwi"];
// let x = fruits1.slice(1, 3);
// // console.log(x)

// const numbers1 = [1,2,3];
// let d = numbers1.toString().split(",");
// // console.log(d);

// let e = fruits1.indexOf("Kiwi");
// // console.log(e);

// const destru = [1,2,3,4,5,6,7];
// const [one,two,...res] = destru;
// console.log(one);
// console.log(two);
// console.log(res[2]);

const arr = [1,2,3,4,5];

arr.unshift(0);
// console.log(arr);
let x = arr.reverse().unshift(6);
console.log(arr);

