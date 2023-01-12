let loginAttempt={user:'Jack', password:'Jack123'}
let newEmp = {name:'Jack', password:'Jack123', level:2}
let loginName = newEmp.name || 'Guest'; // here Guest is falsy value so it return truthy value Jack
let password = newEmp.password || 'Guest';// return truthy value Jack123
let level = newEmp.level || 1;// return truthy value 2
let admin = newEmp.admin || (newEmp.level>=4);// return last falsy value false
let loginSuccess = (loginAttempt.user === loginName) && (loginAttempt.password === password);//return last truthy value Jack123
let levelMsg = (admin ? "You have admin level access" : "Your access level is "+level);// your access level is 2
let message = (loginSuccess ? 'Welcome '+loginName+". "+levelMsg : 'Login Failed');
//welcome Jack .your access level is 2
console.log(message);