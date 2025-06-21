//Programe to check given year is a leapyear or not

// let getYear = prompt("Enter year");

let checkYear = (year) =>{
    if(year%4===0 && year%100 !== 0 || year%400 === 0){
        console.log(`the year : ${year} is a leap year`);
    }else{
        console.log(`the year : ${year} is not a leap year`);
    }
}

// checkYear(2021);
// checkYear(2022);
// checkYear(2020);
// checkYear(2000);
// checkYear(1900);

//programe to check if a character is vovel or consonent

let char = prompt("Enter character").toLowerCase();
let arrVovel = ["a", "e","i","o","u"];
let check = () => {
    if(char.length != 1 || !char.match(/[a-z]/) ){
        return console.log("Please enter a single alphabet character");
    }else if(arrVovel.includes(char)){
       return console.log("Character is Consonent");
    }
}

check();



