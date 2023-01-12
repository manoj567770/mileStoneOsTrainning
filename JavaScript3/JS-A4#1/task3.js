//a  both value are same so, it return true.
console.log(5 == 5);
//b) both value are same so, it return true.
console.log('5' == '5');
//c) Loose equality so converting both value to a common type and return true
console.log(5 == '5');
//d) both value are same so, it return true.
console.log(5 === 5);
//e) false , it cannot convert to common type (strict equality)
console.log(5 === '5');
//f) (strict equallity)
console.log(5 === '5');
//g) true value assume as 1 in javascript so it is false
console.log(true == 8);
//h) true value assume as 1 in javascript so it is false
console.log(true === 8);
//i) true value assume as 1 in javascript so it is false
console.log(true == 0);
//j) true value assume as 1 in javascript so it is false
console.log(true === 0);
//k) true value assume as 1 in javascript so it is false
console.log(true == -3);
//l) true value assume as 1 in javascript so it is false
console.log(true === -3);
//m) true value assume as 1 in javascript so it is false
console.log(false == -1);
//n) false value assume as 0 in javascript so it is true
console.log(false == 0);
//o) false value assume as 0 in javascript so it is false
console.log(false === -1);
//p) false cannot convert to 0 (strict equality)
console.log(false === 0);
//q) false value assume as 0 in javascript so it is false
console.log(false == 6);
//r) false value assume as 0 in javascript so it is false
console.log(false === 6);
//s) true value assume as 1 in javascript so it is false
console.log(5 == true);
//t) true value assume as 1 in javascript so it is true
console.log(1 == true);
//u) true value assume as 1 in javascript so it is false
console.log(0 == true);
//v) true value assume as 1 in javascript so it is false
console.log(5 === true);
//w) true cannot convert to 1 (strict equality)
console.log(1 === true);
//x) true cannot convert to 1 (strict equality)
console.log(0 === true);