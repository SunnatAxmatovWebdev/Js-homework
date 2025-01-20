let n = 45;
let a = 0;

if (n % 10 % 2 !== 0) {
    a += n % 10;
}
n = Math.floor(n / 10);

if (n % 10 % 2 !== 0) {
    a += n % 10;
}
n = Math.floor(n / 10);
if (n % 10 % 2 !== 0) {
    a += n % 10;
}
n = Math.floor(n / 10);

if (n % 10 % 2 !== 0) {
    a += n % 10;
}
console.log(a);