let arr = [{"name":"Dave","js":59,"react":64,"node":67},
{"name":"George","js":58,"react":82,"node":65},
{"name":"William","js":51,"react":56,"node":68},
{"name":"Anita","js":62,"react":65,"node":56},
{"name":"Thomas","js":68,"react":72,"node":95},
{"name":"Steve","js":56,"react":51,"node":63},
{"name":"Julia","js":47,"react":77,"node":72},
{"name":"Mary","js":72,"react":55,"node":81}];

/*let arr1 = arr.reduce((acc,curr) => 
	acc =acc + curr.js,0);

console.log(arr1);*/


/*let arr1 = arr.filter(val=> val.react>70);
console.log(arr1);*/

/*let max = 0;
arr.filter(val=> val.node>max ? max = val.node : max);
let arr2 = arr.find(val=> val.node==max);
console.log(arr2);*/


/*let arr2 = arr.filter(val=> val.js>60);
console.log(arr2);*/


/*let arr2 = arr.filter(val=> val.js+val.react+val.node>175);
console.log(arr2);*/



let grade = (num) => {
	return num>=75 ? 'A' : num>=60 && num<75 ? 'B' : 'C';
}
let arr2 = arr.filter(val=> val.js=grade(val.js));
let arr3 = arr2.filter(val=> val.react=grade(val.react));
let arr4 = arr3.filter(val=> val.node=grade(val.node));
console.log(arr4);

