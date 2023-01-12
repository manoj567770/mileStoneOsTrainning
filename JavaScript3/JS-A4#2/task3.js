/*let arr = [1,5,7,35,6,10,80];

let arr1 = arr.findIndex(val => val>25);
console.log(arr1);*/


/*let arr = [1,9,7,35,6,10,80];

let arr1 = arr.filter(val => val%3!=0);
console.log(arr1);*/


/*let arr = [1,9,9,35,6,10,80];

let sortDesc = (x,y) => {
	return x>y ? -1 : 1;
}

console.log(arr.sort(sortDesc));*/


/*let arr = [1,5,7,35,6,10,80];

let arr1 = arr.map(val => val+val);
console.log(arr1);*/



let arr = [1,5,3];

let arr1 = arr.reduce((acc,curr) => 
	acc = acc + (curr * curr));

console.log(arr1);
