/*let add2 = function(x,y){
	return x+y;
}
console.log(add2(1,2));*/


/*let mult2 = (x,y) => {
	console.log('Arrow Function');
	return x*y;
}

let mult3 = (x,y) => x*y;
console.log(mult2(2,3));
console.log(mult3(2,3));*/


/*let double1 = function(x){
	console.log('Function Expression');
	return 2*x;
}
console.log(double1(4));

let double = (x) => {
	console.log('Arrow function 1');
	return 2*x;
}
console.log(double(4));

let double3 = (x) => 2*x;
console.log(double3(4));
let double4 = x => 2*x;
console.log(double4(4));*/

/*let getNum = function(){
	console.log('Function Expression');
	return 15;
}
console.log(getNum());

let getNum2 = () => {
	console.log('Arrow function');
	return 15;
}
console.log(getNum2());
let getNum3 = () => 15;
console.log(getNum3());*/


let putData = function(inpName,inpAge){
	console.log('Function Expression');
	return {name : inpName , Age : inpAge};
}
console.log(putData('Jack',25));

let putData2 = (inpName,inpAge) => {
	console.log('Arrow function');
	return {name : inpName , Age : inpAge};
}
console.log(putData2('Jack',25));

let putData3 = (inpName,inpAge) => ({name : inpName , Age : inpAge});
console.log(putData3('Bob',33));