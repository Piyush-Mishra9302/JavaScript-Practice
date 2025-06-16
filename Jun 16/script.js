let arr = [2,4,6,8,10,12];

let divArr = arr.map(e => e/2);
console.log("By Map",divArr);

let filarr = arr.filter( e => e>6);
console.log("By filter",filarr);

console.log("Printed by For each loop");
arr.forEach(e => console.log(e * 2));

