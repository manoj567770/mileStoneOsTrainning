let x = 25;
let x1 = !(x);

console.log("! of",x,"is",x1);

let y = '';
let y1 = !(y);

console.log("! of",y,"is",y1);

let a = 10;
let b = 20;

let c1 = a || b;
console.log("OR :",a ,"||",b,"is" ,c1);
let c2 = b || a;
console.log("OR :",b ,"||",a,"is" ,c2);

let d1 = a && b;
console.log("AND :",a ,"&&",b,"is" ,d1);
let d2 = b && a;
console.log("AND :",b ,"&&",a,"is" ,d2);