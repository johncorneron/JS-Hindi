// JavaScript Array Methods

// .toString() 
// toString() method converts the given value into the string.
const course = ["HTML","CSS","JAVASCRIPT","REACT"]
const newCourse = course.toString()
console.log(newCourse);
console.log(typeof newCourse);

// .join()
// join() method creates and returns a new string by cancatinating all elements of an array. It uses a specified seperator between each element in the resulting string.
console.log(course.join(" | "));

// .delete()
// delete() operator is used to delete the given value which can be an object, array, or anithing.
let employee = {
    firstName: "Sourabh",
    lastName: "Sumal",
    Salary: 50000
}
console.log(delete employee.Salary);
console.log(employee);

// .concat()
// concat() method is used to concatinate two or more arrays and it gives the merged array.
const arrayOne = [10,20,30,40,50]
const arrayTwo = [60,70,80,90,100]
const arrayThree = [110,120,130,140,150]
const mergeArray = arrayOne.concat(arrayTwo, arrayThree)
console.log(mergeArray);

// .flat()
// flat() method is used to flatten the array - It merges all the given array and reduces all the nesting present in it.
const nestedArray = [0, [1, [2, 3], 4, 5, [6, 7], 8]]
const flatArray = nestedArray.flat(Infinity)
console.log(flatArray);

// .push()
// push() method is used to add an element at the end of an array. As arrays in JavaScript are mutable objects, We can easily add or remove elements from the Array. It dynamically changes as we modify the elements from the array.
const numbers = [5,10,15,20,25,30]
numbers.push(35,40,45,)
numbers.push(50,55,60,)
console.log(numbers);

// .unshift()
// unshift() method is used to add elements to the front of an array.
const num = [1,2,3,4,5,6]
num.unshift(7,8,9,10,11)
console.log(num);

// .pop()
// pop() method is used to remove elements from the end of an array.
const officeFRI = ["Sourabh","Yuganshi","Gopal","Ajay","Harshita"]
officeFRI.pop()
console.log(officeFRI);

// .shift()
// shift() method is used to remove elements from the beginning of an array.
const normalArray = ["Singh", "Tomar", "Avdhesh", "Raj"]
normalArray.shift()
console.log(normalArray);

// .splice()
// splice() method is used to insert and remove elements in between the array.
const names = ["Bhomsar", "Gagan", "Deepak", "Rohit", "Choubey"]
names.splice(1,2, "Mukesh", "Abhishek", "Amit")
console.log(names);

// .slice()
// slice() method returns a new array containing a portion of the original array, based on the start and end index provuded as arguments.
const allNum = [100,101,102,103,104,105]
const sliceNum = allNum.slice(0, 1)
console.log(sliceNum);

// .some()
// some() method checks whether at least one of the elements of the array satisfies the condition checked by the argument function.
const fruitName = ["Apple", "Mango", "Banana", "Orange", "Grapes"]
// Using some() method to check the "A"
const hasFruitWithA = fruitName.some(function(fruit) {
    return fruit.includes("A") // Check if the fruit names contain "A"
})
console.log(hasFruitWithA);

// .reduce()
// reduce() method is used to reduce the array to a single value and executes a provided function for each value of the array (from left to right) and the function is stored in an accumulator.
const evenNum = [10,20,30,40,50]
const subTotal = evenNum.reduce(fun)
function fun(total, num) {
    return total - num
}
console.log(subTotal);

// .map()
// The map() method creates an array by calling a specific function on each element present in the parent array. It is a non-mutating method. This method iterates over an array and calls the function on every element of an array.
const oddNum = [1,3,5]
const mapNum = oddNum.map(functionMap)
function functionMap() {
    return oddNum.map(Math.sqrt)
}
console.log(mapNum);

// .reverse()
// reverse() method is used to reverse the order of elements in an array. It modifies the array in place and returns a reference to the same array with the reversed order.
const arrayReverse = [1,2,3,4,5]
arrayReverse.reverse()
console.log(arrayReverse);

// .values()
// values() method returns a new Array iterator object that contains the values for each index in the array.
const people = ["Naresh", "Mohan", "Bhatia"]
const iterator = people.values()
for (const value of iterator) {
    console.log(value);
}
