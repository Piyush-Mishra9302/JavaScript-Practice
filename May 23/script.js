
// new Date(year, month, day, hours, minutes, seconds)
// let d = new Date(2020, 2, 22, 12, 24, 45, 45, 300);
//  d = new Date(2020, 2, 22, 12, 24, 45, 45);
//  d = new Date(2020, 2, 22, 12, 24, 45, );
//  d = new Date(2020, 2, 22, 12, 24);
//  d = new Date(2020, 2, 22, 12);
//  d = new Date(2020, 2, 22);
//  d = new Date(2020, 2);
//  d = new Date(2020);

//  d = Date.now();
//  d = new Date("")
// console.log(d);


//  let x = myYear.getFullYear();
//  x = myYear.getMonth();
 //sunday - 0
 //January - 0
//  x = myYear.getHours();
//  x = myYear.getDay();
//  x = myYear.getMilliseconds();
//  console.log(x);



//Single value will be treated as mili seconds
//js adds the mili seconds to jan 1 1970 5:30 date

// let myYear = new Date();
// let birthyear = prompt("Enter your birth year");

// let y = myYear.getFullYear();


// let age = y - birthyear;
// console.log(age);

//*****Arrays ********/

const numbers = [1,2,3,4,5,6];
console.log(numbers[2]);

numbers[2] = 100;

console.log(numbers);

const mixed = ["Vashu", 22, true, null, {name: "Piyush"}, [1,2,3]];
console.log(mixed);

console.log(mixed[5][1]);