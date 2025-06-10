let counter = 0;
let counterText = document.getElementById("counter");

let incriment = () => {
    counter += 1 ;
    counterText.innerHTML = counter;
}

let reset = () =>{
    counterText.innerHTML = 0;
}

let decriment = () => { 
    (counter == 0 )?  counterText.innerHTML = 0 : counter -= 1,  counterText.innerHTML = counter;
}