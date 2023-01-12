let arr = ['a','b','ab','c','aaaa','baba'];

const arr1 = arr.map(function(val){
	return val.startsWith('a') ? val : 'x' + val;
});

console.log(arr1);