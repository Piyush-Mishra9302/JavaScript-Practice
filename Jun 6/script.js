console.log("June 6");

function hello(){
    let obj = document.querySelector("#text");
    obj.innerHTML = "<i>Hello World</i>";

    obj.style.color = "red"; 
}

function changeColor(){
    let box = document.querySelector("#square");
    box.style.backgroundColor = "orange";
     box.style.backgroundImage = "none"
}
function changeColor2(){
    let box = document.querySelector("#square");
    box.style.backgroundColor = "red";
    box.style.backgroundImage = "none"
}
function addImage(){
    let box = document.querySelector("#square");
    box.style.backgroundImage = "url('https://images.unsplash.com/photo-1530631673369-bc20fdb32288?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BsYXNofGVufDB8fDB8fHww')";
}