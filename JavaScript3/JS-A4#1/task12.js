/*let strArr = ['Jack','John','Max'];
let z;

let arr1 = strArr.map(function(ele){
	for(let i=0;i<ele.length;i++){
		  ele[i]=='x' ? z=ele : '';
		}
		
		return z ? 'GotX' : 'NOT Found';
});
console.log(arr1);*/


/*let strArr = ['Jack','John','Max','JavaScript'];

let arr1 = strArr.map(function(ele){
	return ele.length>5 ? ele.substring(0,5) : ele;
});
console.log(arr1);*/


let arr = [10,20,145,355,25,96,108,84];

let arr1 = arr.map(function(ele){
	return ele>100 ? ele + 10 : ele - 25;
});

console.log(arr1);