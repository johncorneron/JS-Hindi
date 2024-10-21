const userEmail = "name.963258@mail.com"

if (userEmail) {
    console.log("Got User E-Mail");
} else {
    console.log("Don't Have User E-Mail");
}

// Falsy Values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy Values
// "0", "false", " ", [], {}, function(){}

// Nullish Coalescing Operator (??): null, undefined
let valueOne = null ?? 10
console.log(valueOne);

let valueTwo = 50 ?? undefined
console.log(valueTwo);

let valueThree = undefined ?? null ?? 8 ?? 9
console.log(valueThree);

// Terniary Operator
// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("More than 80") : console.log("Less than 80");
