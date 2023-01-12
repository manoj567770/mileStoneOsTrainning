let num1 = 25;
let num2 = 25;
let str1 = '25';
let str2 = '25';
let bool1 = 'true';
let bool2 = 'false';
let arr1 = [25];

console.log('loose',num1==num1);
console.log('strict',num1===num2);

console.log('loose',num1==str1);
console.log('strict',num1===str1);

console.log('loose',num1==bool1);
console.log('strict',num1===bool1);

console.log('loose',num1==arr1);
console.log('strict',num1===arr1);



