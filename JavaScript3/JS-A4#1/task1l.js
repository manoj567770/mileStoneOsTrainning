let nums = [2,-7,4,-22,-5,6];

const arr1 = nums.map(function(val){
	return val<0 ? -1*val : val;
});

console.log(arr1);