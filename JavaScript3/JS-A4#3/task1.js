/*let x = 10;
if(x>5){
	var a1 = 20;
	let a2 = 25;
	a3 = 30;
	console.log('a1= ',a1);
	console.log('a2= ',a2);
	console.log('a3= ',a3);
}
	console.log('a1= ',a1); //function scope
	console.log('a2= ',a2);
	//error a2 is not defined bacause it is block scope only work under block.
	console.log('a3= ',a3);//globle variable*/



	/*function hello1(){
		c1 = 10;
		var c2 = 12;
		let c3 = 16;
	}

	hello1();

	console.log('c1= ',c1);
	//c1 = 10 because it is globle variable
	console.log('c2= ',c2);
	//error because c2 is function scope it only access
	// inside the function
	console.log('c3= ',c3);
	// error because c3 is block scope it only access
	// inside the block*/


	/*var x = 5; //function scope
	console.log(x);
	let y = 10; //block scope
	console.log(y);
	z = 15; // globle variable
	console.log(z);*/


	var a1 = 20;
	console.log(a1);

	for(let i=0;i<10;i++){
		var b1 = 6;
		var a1 = b1*10;
	}

	console.log(a1);
	//60 unexpected result so we have to prefered let


	