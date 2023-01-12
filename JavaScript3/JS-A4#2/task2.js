/*let num = x => x*x;
console.log(num(5));

let num1 = x => x*x*x;
console.log(num1(5));*/

/*let num = (x,y) => x>y ? x : y;
console.log(num(14,25));*/

/*let str = str1 => str1.toUpperCase();
console.log(str('javascript'));*/


/*let num = (x,y,z) => x==y==z ? true : false;
console.log(num(1,1,2));*/


/*let num = (x) => {
	for(let i=0;i<=x;i++)
	 x%i==0 ?  console.log(i) : '';
}

num(12);*/



/*let num = (x) => {
	let z = '';
	for(let i=1;i<=x;i++)
		x!=0 ? z =z + 'A' : '' ;
	console.log(z);
}
num(5);*/


/*let str = (str1,ch) => {
	let index = str1.indexOf(ch);
	let z = str1.replace(ch,'');
	console.log(z);
	}
str('Jack','c');*/


/*let num = x => {
	let z = '';
	for(let i=1;i<=x;i++)
		i%2==0 ? z = z + 'B' : z = z + 'A';
	console.log(z);
}
num(10);*/

/*let str = str1 => {
	let z = '';
	for(let i=0;i<str1.length;i++){
		let index = z.indexOf(str1[i]);
		if(index<0)
			index<0 ? z = z + str1[i] : '';
			

	}
	return z.length;
}

console.log(str('javascript'));*/


let str = (str1,str2) => {
	return {txt1 : str1,txt2 : str2};
}

console.log(str('Jack','Mary'));