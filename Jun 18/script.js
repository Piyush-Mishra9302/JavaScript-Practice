// let Time = new Date();

// let days = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];

// console.log(days[Time.getDay()]);

// let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "AUg", "sep", "Oct", "Nov", "Dec"];
// console.log(months[Time.getMonth()]);

// let counter = document.getElementById("count")
//  let count = 0 ;
// let inccount = () => {

//     console.log(count);
//     count++;
// }

// let startCount = () => {

//   setInterval(inccount, 2000);
//  }

// let stop = () => {
//     clearInterval(inccount);
// }

// let initialValue = document.querySelector("#inp").value;
// let showValue = document.querySelector("#count");
// let count = Number(initialValue);

// let interval;

// let inccount = () => {
//   // console.log(count);
//   showValue.innerHTML = count;
//   count++;
// };

// let startCount = () => {
//   interval = setInterval(inccount, 2000);
// };

// let stop = () => {
//   clearInterval(interval);
// };

 function getRandom4DigitNumber() {
      let result = Math.floor(1000 + Math.random() * 9000); 
      console.log(result);
    }