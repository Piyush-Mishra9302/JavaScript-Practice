let store = "";

let display = document.querySelector("#screen");

let cal = (value) => {

    const operator = ['+', '-', '*', '/'];

    if(operator.includes(value)){
        if(store === "" || operator.includes(store.slice(-1)));
        return;
    }

    store = store + value;
    display.innerHTML = store;
}

let res = () => {
    store = eval(store).toString();
    display.innerHTML = store;
}

let clr = () => {
    store = "";
    display.innerHTML = store;
}

let del =() => {
    
}