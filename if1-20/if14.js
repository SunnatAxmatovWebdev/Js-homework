let n = 27;
let a = Math.floor(n/10);
let b = n%2;
let c = b*10+a;  
if(c<=n){
    console.log("true");
} else{
    console.log("false");
}