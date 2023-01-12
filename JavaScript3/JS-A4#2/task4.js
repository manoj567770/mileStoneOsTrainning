/*let arr = ['arive','john','alive'];

let arr1 = arr.filter(val => val.startsWith('a'));
console.log(arr1);*/


/*let arr = ['react','javascript','java','bootstrap'];

let arr1 = arr.findIndex(val=>val.length>7);
console.log(arr1);*/


/*let arr = ['Box','Bat','Apple','Extract'];

let arr1 = arr.filter(val=> val.indexOf('x')>0 ? val : '');
console.log(arr1);*/




/*let arr = ['Box','Bat','Apple','Extract'];

let arr1 = arr.map(val=> val.length);
console.log(arr1);*/

/*let arr = ['Hello','this','is','','','me'];
let arr1 = arr.reduce((acc,curr) => 
	curr!=''? acc =acc+ curr[0] : acc+'X','');

console.log(arr1);*/


let arr = ['A','bcd','XYZ'];
let arr1 = arr.map(val=>'<p>'+val+'</p>');
console.log(arr1.join(''));

