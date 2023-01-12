/*
let maxNum = (n1=1,n2=1,n3=1,n4=1) =>{
	let max;
	n1>n2 && n1>n3 && n1>n4 ? max=n1 : 
	n2>n1 && n2>n3 && n2>n4 ? max=n2 :
	n3>n1 && n3>n2 && n3>n4 ? max=n3 : max=n4 ;
	return max;
}

console.log(maxNum(4,6,2,9));
console.log(maxNum(4,6,2));
console.log(maxNum(4,6));
console.log(maxNum(4));
*/



let calculateBill = (price,quantity,discount,paymentType='Credit Card') => {
	let additional = paymentType=='Credit Card' ? 0.02 : 
					paymentType=='Wallet' ? 0.01 :
					paymentType=='Net Banking' ? 0.005 : 0.05;
		let addFee = additional * price * quantity;			
	let totBill = price * quantity - discount;
	let totBills = totBill + addFee;
	return {amount:totBills,paymentType:paymentType};
}

console.log(calculateBill(400,20,2));
console.log(calculateBill(400,20,2,'Net Banking'));