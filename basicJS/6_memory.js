// Stack Memory & Heap Memory
// The stack memory used in primitive memory
// The heap memory used in non-primitive memory

// Stack Memory Ex:-
let mahaChaluPurja = "Sourabh"
let chaluPurja = mahaChaluPurja
chaluPurja = "Bhomsar"
console.log(mahaChaluPurja);
console.log(chaluPurja);

// Heap Memory Ex:-
let userOne = {
    email: "name@gmail.com",
    upi: "name@ybl"
}

let userTwo = userOne

userTwo.email = "newname@yahoo.com"

console.log(userOne.email);
console.log(userTwo.email);
