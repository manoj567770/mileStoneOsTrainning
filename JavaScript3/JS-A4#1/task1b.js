let arr1 = [false,null,undefined,0,NaN,'2'];
let arr1TF = arr1.map(function(val){
	if(val)
		return val + ' is Truthly';
	else
		return val + ' is Falsy';
});
console.log(arr1TF);