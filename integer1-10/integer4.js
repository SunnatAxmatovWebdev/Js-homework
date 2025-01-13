let a = 345;

let x = Math.floor(a / 100);
let y = Math.floor(a%100/10);
let z = Math.floor(a%10);

let b = (y * 100) + (x * 10) + z;
console.log(b);