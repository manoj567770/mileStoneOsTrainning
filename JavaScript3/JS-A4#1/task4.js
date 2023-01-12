//a) 5 is truthy value return 5 
console.log(false || 5);
//b) evaluate left to right true is truthy value return true
console.log(true || 5);
//c) evaluate left to right return falsy value false
console.log(false && 8);
//d) here not falsy value so return last truthy value
console.log(true && 8);
//e) return truthy value
console.log(false || 'Hello');
//f) both truthy value so return first truthy value
console.log(true || 'Hello');
//g) return falsy value
console.log(false && 'Hello');
//h) not any falsy value so return last truthy value
console.log(true && 'Hello');
//i) return truthy value 10
console.log(null || 10);
//j) return falsy value null
console.log(null && 10);
//k) both truthy value so return first truthy value Hello
console.log('Hello' || 'Bye');
//l) both truthy value return last truthy value Bye
console.log('Hello' && 'Bye');
//m) return truthy value 5
console.log(0 || 5);
//n) return falsy value 0
console.log(0 && 5);
//o) return truthy value ok
console.log('' || 'Ok');
//p) return falsy value  ''
console.log('' && 'Ok');
//q) return truthy value Red
console.log(undefined || 'Red');
//r) return falsy value undefined
console.log(undefined && 'Red');
//s) all truthy return first truthy value
console.log(2 || 3 || 4);
//t) all truthy return last truthy value
console.log(2 && 3 && 4);
//u) return truthy value 12
console.log(0 || 0 || 12);
//v) return falsy value 0
console.log(0 && 0 && 12);
//w) return truthy value Red
console.log(''|| 'Red' || '');
//x) return falsy value ' '
console.log('' && 'Red' && '');
//y) return first truthy value
console.log(null || 'Red' || 'Green');
//z) return falsy value null
console.log(null && 'Red' && 'Green');