// Control Flow Or Logic FLow

// Conditions
// <, >, <=, >=, ==, !=, ===

const temperature = 32

if (temperature > 50 ) {
    console.log("Temperature is greater than 50");
} else {
    console.log("Temperature is not greater than 50");
}

const balance = 501

if (balance < 500) {
    console.log("Balance is less than 500");
} else if (balance < 750) {
    console.log("Balance is less than 750");
} else if (balance < 850) {
    console.log("Balance is less than 850");
} else {
    console.log("Balance is 1000");
}

const userLoggedIn = true
const debitCard = true
const userAge = 18
const userLoggedFromGoogle = true
const userLoggedFronEmail = false

// && = compulsory, Ye sabhi conditions hone hi chahiye 
if (userLoggedIn && debitCard && userAge >= 18) {
    console.log("User Can Shop");
}

// || = Or, In sabhi coditions me se koi bhi ek ho tab
if (userLoggedFromGoogle || userLoggedFronEmail) {
    console.log("User Logged In");
}
