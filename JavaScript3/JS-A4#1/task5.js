m1 = 0, m2= 'DEF', m3 = 'Good';
let x1 = m1 || m2 || m3;
let y1 = m1 && m2 && m3;

console.log(x1); // return first truthy value 'DEF'
console.log(y1); // return first falsy value 0




//
//
//
//
//
//