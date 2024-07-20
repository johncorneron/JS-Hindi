// 2 Data Types

// Primitive Data Types
// 7 Types - String, Number, Boolean, Null, Undefined, Symbol, BigInt, 

const id = Symbol("555")
const otherId = Symbol("555")
console.log(id === otherId);

// Reference Data Types (Non Primitive)
// Array, Objects, Functions

const Heros = ["Homelander","Black Noir","A-Train","Soldier Boy","Queen Maeve","The Deep","Starlight"]
console.log(Heros);

let myObj = {
    name: "Arpit",
    age: 28
}
console.log(myObj);

const myFunction = function () {
    console.log("My World");
}
myFunction()
