/*let m = 0 , n = 0;
let z1 = m!=0 ? m : n!=0 ? n : 25;

console.log(z1);*/


/*let str = 'Jack';
let str1 = str === '' ? 'A' : str;
console.log(str1);*/


/*let str = '' ;
let json = str!= '' ? {name : str} : {name : 'TestUser'};
console.log(json);*/


/*let s1 = 'Mary';
let n1 = 0;
let name;
let age;

if(s1!=''){
	name = s1;
}else{
	name = 'Jack';
}
if(n1!=0){
	age = n1;
}else{
	age = 24;
}
console.log({name : name,age : age});*/



/*let s1 = '';
let s2 = '';
let result ;

if(s1!=''){
	result = s1;
}
else if(s2!=''){
	result = s2;
}else{
	result = 'Bug';
}
console.log(result);*/


/*let m =20;
let n = 10;
let res;

if(m!=0 && n!=0){
	res = n;
}else{
	res = 0;
}
console.log(res);*/


/*let s1 ='Jack';
let s2 = 'Mary';
let res;

if(s1!= '' && s2!=''){
	res = s2;
}else{
	res = '';
}
console.log(res);*/



let num1 = 0;
let num2 = 30;
let res;

if(num1!=0){
	res = {myNum : num1};
}else if(num2!=0){
	res = {myNum : num2};
}else{
	res = {myNum : -1};
}
console.log(res);
