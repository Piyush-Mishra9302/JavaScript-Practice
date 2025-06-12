let store = "";

let display = document.querySelector("#screen")

let cal = (value) => {
    const operators = ['+', '-', '*', '/'];

    if (operators.includes(value)) {
        
        if (store === "" || operators.includes(store.slice(-1))) {
            return; 
        }
    }

    store += value;
    display.innerHTML = store;
};


let res = () => {
    store = eval(store).toString();
    display.innerHTML = store;
}

let clr = () => {
    store = "";
    display.innerHTML = store;
}
let del = () => {
    store = store.slice(0, -1);
    display.innerHTML = store;

}