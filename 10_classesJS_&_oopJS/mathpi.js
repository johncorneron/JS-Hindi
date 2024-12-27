console.log(Math.PI);

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor);

const chai = {
    name: "ginger chai",
    price: 100,
    isAvailable: true,

    orderChai: function () {
        console.log("Chai Nahi Bani");
    }
}
console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, "price"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== "function") {
        console.log(`${key} : ${value}`);
    }
}