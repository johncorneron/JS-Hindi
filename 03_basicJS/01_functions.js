function calculateCartPrice(...num1) {
    return num1
}
console.log(calculateCartPrice(100, 200, 300, 400, 500));

const user = {
    username: "Arpit",
    price: 999
}

function handleObject(anyObject) {
    console.log(`The user is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user)

const myNewArray = [200, 100, 500, 300]
function returnSecondValue(getArray) {
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
