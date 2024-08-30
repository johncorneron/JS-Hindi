const user = {
    username: "Arpit",
    price: 1000,
    welcomeMessage: function () {
        console.log(`Hello ${this.username}, Welcome to our website`);
        console.log(this);
        
        
    }
}
user.welcomeMessage()

function global() {
    console.log(this);
}
global()

const otherName = () => {
    username: "Sourabh SUmal",
    console.log(this);
}
otherName()

const addNum = (addOne, addTwo) => {
    return addOne + addTwo
}
console.log(addNum(50, 100));

const addNumber = (addThree, addFour) => (addThree + addFour)
console.log(addNumber(10, 40));

const otherEx = (otherOne, otherTwo) => ({userName: "Bhanu"})
console.log(otherEx(1, 2));
