let a = 230;

let b = Math.floor(a / 100);
let c =  Math.floor((a % 100) / 10);
let d = a % 10;
let s = b + c + d;
let f = b * c * d;
console.log(s + " " + f);

