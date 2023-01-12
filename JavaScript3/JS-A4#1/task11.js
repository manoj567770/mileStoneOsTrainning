/*let arr = [20,5,80,7,20,4,36,15,12];
let max = arr.reduce(function(acc,curr){
	return curr<acc ? curr : acc;
});
console.log(max);*/



let arr = [20,5,80,7,20,4,36,15,12,46];
let max = arr.reduce(function(acc,curr){
	return curr>25 ? acc+1 : acc;
},0);
console.log(max);
