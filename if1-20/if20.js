let n = 12345 ;

let a = Math.floor(n / 10000);
let b = Math.floor(n / 1000) % 10;
let c = Math.floor(n / 100) % 10;
let d = Math.floor(n / 10) % 10;
let e = n % 10;

let x = a;
let index = 0;

if (b > x) {
  x = b;
  index = 1;
}

if (c > x) {
  x = c;
  index = 2;
}

if (d > x) {
  x = d;
  index = 3;
}

if (e > x) {
  x = e;
  index = 4;
}

console.log(`Eng katta son: ${x}, Indeksi: ${index}`);