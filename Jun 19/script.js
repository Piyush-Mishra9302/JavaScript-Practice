// Programe to find largest of three numbers

let a = Number(prompt("Enter a"));
let b = Number(prompt("Enter b"));
let c = Number(prompt("Enter c"));

if (a > c) {
  if (a > b) {
    console.log(`a = ${a} is the gratest number`);
  } else {
    console.log(`b = ${b} is the gratest number`);
  }
} else {
  if (b > c) {
    console.log(`b = ${b} is the gratest number`);
  } else {
    console.log(`c = ${c} is the gratest number`);
  }
}
