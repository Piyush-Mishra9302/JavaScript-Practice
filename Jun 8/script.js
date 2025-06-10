

// let show = () =>{
//     let text = document.querySelector(".inptxt").value
    
// }

// let newText = () =>{
//     let text = document.querySelector(".inptxt").value
//    
//     ptag.innerHTML = text;
// }

let add = () => {
    let fst = document.querySelector(".inptxt").value;
    let a = Number(fst);
    let second = document.querySelector(".inptxt2").value;
    let b = Number(second);
    let ptag = document.getElementById("sum");

    result = a + b;

    ptag.innerHTML = result;

    
}