//-> hoisting is a concept in javascript where all the 
//declarations of variables and functions are moved to the
// top of the scope before code execution.log
//A big advantage of hoisting is that functions can be used 
//no matter where they are declared.log



/*
hello();// hello function call before initializing hello function
// because of hoisting
hello1();
function hello1(){
	console.log('hello1');
}
function hello(){
	console.log('hello');
}
*/



// If a function is called will missing arguments (less than declared)
//the missing values are set to undefined.
//Default parameters allow function parameters to be initialized with 
//default values if no value is supplied.


/*
 function add(a1=0,a2=0,a3=0){
	console.log(a1,a2,a3);
	let sum = a1 + a2 + a3;
	console.log(sum);
}
add(1,2);
add(5);
*/

//similar to the spread operator for arrays the spread operator 
//(...) with objects is used to 
//create copies of existing objects 
//make a copy of an object with more properties

/*
let user1 = {name : 'Jack',age : 22};
let user2 = {...user1, course : 'javascript'};
user2.name = 'Mary';
console.log(user1);

console.log(user2);
*/


// object destructuring is used to extract properties from objects
// and bind them to variables.
//advantages of object destructuring are
// -> Extract multiple properties in one statement.
// -> set a default value if the property doesn't exist.

let student = {
	name : 'Jack',
	age : 22,
	course : 'javascript',
	grade : 'A'
};

let {course,age,grade='B'} = student;
console.log(name,age,course,grade);

//the order of the variables not 
// important in object destructuring. 


//if property with the name specified in object destructuring 
//is not found in the object then it is not print the name