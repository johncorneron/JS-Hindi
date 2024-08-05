const myArr = [0,1,2,3,4,5]
console.log(myArr[5]);

const myHeros = ["Naagraj","Super Commando Dhruva","Parmanu","Inspector Steel","Doga"]
console.log(myHeros[1]);


const myNewArr = new Array(10,11,12,13,14,15)
console.log(myNewArr[3]);

myHeros.push("Shakti")
console.log(myHeros);

myHeros.unshift("Shaktinaan")
console.log(myHeros);

myHeros.shift()
console.log(myHeros);

console.log(myHeros.includes("Naagraj"));
console.log(myHeros.indexOf("Parmanu"));

let supes = ["Naagraj","Super Commando Dhruva","Parmanu","Inspector Steel","Doga"]
supes = myArr.join()
console.log(myArr);
console.log(supes);

const newArray = [10,20,30,40,50,60,70,80,90]
const sliceArray = newArray.slice(1,3)
const spliceArray = newArray.splice(1,3)
console.log("Default Array ", newArray);
console.log("Array - A ", sliceArray);
console.log("Array - B ", spliceArray);

