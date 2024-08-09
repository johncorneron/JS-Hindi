// .spread()
// The spread operator [...name1, ...name2] expands an iterable (like an array) into more elements, This allows us to quickly copy all or parts of an existing array into another array.
const mcHeros = ["Captain America", "Thor", "Hulk", "Iron Man"]
const dcHeros = ["Superman", "Batman", "Flash", "Green Lantern"]
const rajHeros = ["Naagraj", "Super Commando Dhruva", "Parmanu", "Inspector Steel"]
const allHeros = [...mcHeros, ...dcHeros, ...rajHeros] // Spread Operator
console.log(allHeros);

// .flat()
const nestedArray = [0,1,[2,3],4,5,[6,7],8,9,[10,11,12,[13,14,15]]]
const simpleArray = nestedArray.flat(Infinity)
console.log(simpleArray);

// Check Array
console.log(Array.isArray("Arpit"));
console.log(Array.from("Arpit"));

// Modern ways to converts array
const scoreOne = 1000
const scoreTwo = 1000
const scoreThree = 1000
console.log(Array.of(scoreOne, scoreTwo, scoreThree));
