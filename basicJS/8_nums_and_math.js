const score = 500
console.log(score);

const balance = new Number(150000)
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));
console.log(balance.toFixed(1));

const otherNumber = 50.666779
console.log(otherNumber.toPrecision(2));

const hundreds = 100000
console.log(hundreds.toLocaleString("en-IN"));

// Maths
console.log(Math);
console.log(Math.abs(-20));
console.log(Math.round(9.5));
console.log(Math.ceil(10.1));
console.log(Math.floor(5.9));
console.log(Math.min(10, 9, 8, 7, 6));
console.log(Math.max(10, 9, 8, 7, 6));
console.log(Math.random());
console.log((Math.random()*10)+1);

const minNum = 10
const maxNum = 20
console.log(Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
