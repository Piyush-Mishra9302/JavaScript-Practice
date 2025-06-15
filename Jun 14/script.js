

// let ptag = document.querySelector("#result");

// let sum = () => {
//  let result = 0;
//   let value = document.querySelector("#inp").value;
//   numValue = Number(value);
//   for (let i = 1; i <= numValue; i++) {
//     result += i;
//   }
//   ptag.innerHTML = result;

// };

// let counter = 10;

// let hOneTag = document.getElementById("counter");

// let incriment = () =>{
//     counter += 3;
//     hOneTag.innerHTML = counter;
// };
// let decriment = () => {
//   if (counter <= 10) {
//     hOneTag.innerHTML = 10;
//   } else {
//     counter -= 3; 
//     hOneTag.innerHTML = counter;
//   }
// };

// let getPrompt = () => {
//     let ptag  = document.querySelector("#newText");
//     let promptText = prompt("Enter any sentence");
//     let lastDigits = promptText.slice(-3);
//     if(lastDigits === "ing"){
//         ptag.innerHTML = `Yes ${promptText} ends with ing`;
//     }else{
//         ptag.innerHTML = `No ${promptText} isn't ends with ing`;
//     }
// }

// let arr = [2,4,6,8,10];
// let newArr = [];

// for(let i = 0; i < arr.length; i++){
    
//     newArr.push(arr[i]+5);

// }

// let oldArray  = document.querySelector("#oldArray");
// oldArray.innerHTML = `This is the old Array => ${arr}`;

// let newArray = document.querySelector("#newArray");
// newArray.innerHTML = `This is the new Array => ${newArr}`;


// let getPrompt = () =>{
//     let htag = document.querySelector("#hthree");
//     let promptText = prompt("Enter the number");
//     if(promptText > 100){
//         htag.innerHTML = `Yes ${promptText} is grater than 100`;
//     } else if (promptText <= 100){
//         htag.innerHTML = `Yes ${promptText} is less than or equals to 100`
//     } else {
//         htag.innerHTML = `${promptText} is a invalid input`
//     }
// }


let genColor = () =>{
    let inptxt = document.querySelector("#colorText").value

    document.documentElement.style.backgroundColor = inptxt;
}