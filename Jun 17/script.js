
let data = [
    {
        name :"Vashu",
        city : "Satna",
        age : 24
    },
    {
        name :"Piyush",
        city : "Satna",
        age : 25
    },
    {
         name :"Priyam",
        city : "Satna",
        age : 26
    }
];

let show = document.querySelector("#showData");

data.map((e) => {
    show.innerHTML += `
    
    <tr>
        <td>${e.name}</td>
        <td>${e.city}</td>
        <td>${e.age}</td>
    </tr>
    
    `
})