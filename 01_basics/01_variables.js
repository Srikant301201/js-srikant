const accountId = 144553
let accountEmail = "srikant@123.com"
var accountPassword = "123123"
accountCity = "Bhubaneswar"


// accountId = 2  // not allowed

accountEmail = "gdc@ds.com"
accountPassword = "121212"
accountCity = "Banglore"
let accountState;
console.log(accountId);


/*
prefer not to use var
because of issue in block scope and functional scope
*/



console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


