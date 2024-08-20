// singleton
// Object.create
// object literals

const mySym = Symbol("Key 1")

const jsUser = {
    name: "Arpit",
    "full name": "Arpit Kumar Ojha",
    [mySym]: "My Key 1",
    age: 28,
    location: "Delhi",
    Email: "arpit.google.com",
    isLoggedIn: false,
    lastLoginDays: ["Sunday", "Monday"]
}
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);

jsUser.greeting = function () {
    console.log("Hello JS User");
}
console.log(jsUser.greeting());

jsUser.greetingTwo = function () {
    console.log(`Hello JS User - ${this.name}`);
}
console.log(jsUser.greetingTwo());
