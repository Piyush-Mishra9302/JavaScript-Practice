// Use filter() to get names longer than 4 letters:

     //let names = ["Ram", "Sita", "Lakshman", "Hanuman"];
     // Output: ["Lakshman", "Hanuman"] 

let names = ["Ram", "Sita", "Lakshman", "Hanuman"];

for(let i = 0; i < names.length; i++){
    if(names[i].length > 4){
        console.log(names[i]);
    }
}
