/*
function multiply(n1=1,n2=1,n3=1,n4=1,n5=1){
	return n1*n2*n3*n4*n5;
}

console.log(multiply(1,2,3,4,5));
console.log(multiply(1,2,3,4));
console.log(multiply(1,2,3));
console.log(multiply(1,2));
console.log(multiply(1));
console.log(multiply());
*/

/*
let check = (target,s1=0,s2=0,s3=0) => {
	let total = s1 + s2 + s3;
	console.log(total);
	return total>target;
}

console.log(check(22,2,5));
*/

/*
let obj = {product:'PR01',price:10,quantity:25};
let {price,quantity} = obj;
let discPercent = quantity > 8 ? 0.15 : 0.10;
let discount = discPercent * price * quantity;
let finalAmount = price * quantity - discount;
let obj1 = {...obj,discount:discount,finalAmount:finalAmount};
console.log(obj);
console.log(obj1);
*/



const arr = [{name:'Mary',marks1:25,marks2:30,marks3:40},
			{name:'Bob',marks2:22,marks3:33},
			{name:'Dave',marks3:19},
			{name:'Tim',marks1:25},
			{name:'jack'}];

	const arr1 = arr.map(st=>{
		let {marks1=0,marks2=0,marks3=0} = st;
		let totalMarks = marks1 + marks2 + marks3;
		let obj = {...st,totalMarks:totalMarks};
		return obj;
	});
	console.log(arr1);
	console.log(arr);	
