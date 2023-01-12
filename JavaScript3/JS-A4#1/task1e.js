const arr = ['A','Hello','','B','','C'];

const arr1 = arr.map(function(val){
	return val || 'NA';
});

console.log(arr1);