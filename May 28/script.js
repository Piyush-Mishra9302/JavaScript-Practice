const person = {
    name: "john",
    age: 23,
    isEligible: true,
    address : {
        city: "Bhopal",
        state : "MP"
    },
    hobby : ["dance", "singing"]
}

//constructor

const student = new Object();

student.id = 1;

//spread operator

const obj1  = { a: 1, b : 2};
const obj2  = { c: 3, d : 4};

const obj3 = {...obj1, ...obj2};
console.log(obj3);

//destructuring

const todo = {
    id:1,
    title: "dfdf",
    user: "Vashu"
}

// const {id, title, user} = todo;
// console.log(title);

const{id: i, title: t, user: u} = todo;
console.log(t);

//JSON -> JSON is nothing but it is the array of objects.

const user = {
    id: 1,
    name: "Rahul",
    age: 23,
    city: "Bhopal"
}

//CONVERT OBJECT TO JSON STRING

const jsonUSER = JSON.stringify(user);
console.log(user);
console.log(jsonUSER);

//Convert json string to object

const backToObject = JSON.parse(jsonUSER);
console.log(backToObject);