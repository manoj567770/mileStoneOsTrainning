let nums = [1,5,2,7,10];

let count = nums.reduce(function(acc,curr){
	return curr % 2===0 ? acc+1 : acc ;
},0);

console.log(count);