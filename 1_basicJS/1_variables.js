const accountId = 123456
let accountMail = "arpit.12345@gmail.com"
var accountPassword = "5555"
accountCity = "Raj Nagar" // Never use
let accountState;

// Prefer not to use var because of issue in block scope & functional scope

// accountId = 2
accountMail = "sourabh12345@gmail.com"
accountPassword = "12345"
accountCity = "Delhi"

// console.log(accountId);
console.table([accountId, accountMail, accountPassword, accountCity, accountState])
