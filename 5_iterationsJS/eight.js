const basicNum = [1, 2, 3, 4, 5]
const totalNum = basicNum.reduce( (accumulator, currentValue) => {
    console.log(`Accumulator: ${accumulator} & Current Value: ${currentValue}`);
    return accumulator + currentValue
}, 0)
console.log(totalNum);

const shoppingCart = [
    {
        courseName: "HTML5 COURSE",
        priceTag: 599
    },
    {
        courseName: "CSS3 COURSE",
        priceTag: 999
    },
    {
        courseName: "JAVASCRIPT COURSE",
        priceTag: 2999
    }
]
const priceToPay = shoppingCart.reduce( (accumulator, item) => accumulator + item.priceTag, 0 )
console.log(priceToPay);
