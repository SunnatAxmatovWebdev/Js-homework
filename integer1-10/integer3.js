let a = 231;

let b = Math.floor(a / 100);
let c = Math.floor(a%100/10);
let d = Math.floor(a%10);
let s = (d*100) + (c*10) + b;

console.log(s);
