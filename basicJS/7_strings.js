// Modern String
const name = "Arpit"
const age = 28
console.log(`Hello, my name is ${name} & I'm ${age} years old.`);

const newGame = new String("LIMBO")
console.log(newGame);
console.log(newGame[0]);
console.log(newGame[1]);
console.log(newGame[2]);
console.log(newGame[3]);
console.log(newGame[4]);

// Strings Methods

// slice()
// slice method extracts a part of the string based on the starting index & ending index and returns a new string.
let a = "Power Rangers Ninja Storm"
let b = a.slice(0, 5)
let c = a.slice(6, 13)
let d = a.slice(14, 19)
let e = a.slice(20, 25)

console.log(b);
console.log(c);
console.log(d);
console.log(e);

// substring()
// substring method returns the part of the given from the start index to the end index - Indexing start from Zero.
let body = "Eye, Brain, Ear"
let part = body.substring(6, 10)
console.log(part)

// substr()
// substr method returns the specified number of characters from the specified index from the given string. It extracts the part of the specified index from the given string.
let fruits = "mango, apple, banana"
let oneFruits = fruits.substr(6, 6)
console.log(oneFruits);

// replace()
// replace method replaces a part of the given string with another string but the original string will remain unchanged.
let friends = "bhomsar, gagan, sourabh, omprakash, jayprakash"
let changeFriend = friends.replace("jayprakash", "sandeep")
console.log(changeFriend);

// replaceAll()
// replaceAll method returns a new string after replacing all the matches of the string with a specified string or a regular expression. The original string is left unchanged after this operation.
let comAssemble = "display, mouse, keyboard, ram, processor, graphic card, hdd, ssd, hdd"
let updateParts = comAssemble.replaceAll("hdd", "ryzen")
console.log(updateParts);

// toUpperCase()
// toUpperCase method converts all the characters present in the string to upper case and returns a new string with all characters in upper case.
let adult = "arpit".toUpperCase()
console.log(adult);

// toLowerCase()
// toLowerCase method converts all the characters in lower case and returns a new string with all the characters in lower case.
let lowerWord = "ARPIT KUMAR"
console.log(lowerWord.toLowerCase());

// concat()
// concat method combines the text of two strings and returns a new combined or joined strings.
let myName = "Hello! My name is Arpit"
let myAge = " & I'm 28 years old."
console.log(myName.concat(myAge));

// trim()
// trim method is used to remove white spaces from the given string. This method returns a new string with removed white spaces.
let sup = "Nagraj          "
let newSup = sup.trim()
console.log(sup.length);
console.log(newSup.length);

// trimStart()
// trimStart method removes whitespaces from the beginning of a string. The value of the string is not modified in any manner, including any whitespace present after the string.
let spaceInStart = "      Space in start word"
let trimInStart = spaceInStart.trimStart()
console.log(spaceInStart);
console.log(trimInStart);

// trimEnd()
// trimEnd method removes white space from the end of a string. The value of the string is not modified in any manner.
let spaceInEnd = "Space in end       "
let trimInEnd = spaceInEnd.trimEnd()
console.log(spaceInEnd.length);
console.log(trimInEnd.length);

// padStart()
// padStart method pad a string with another string until it reaches the given length. The padding is applied from the left end of the string.
let thermos = "Bottle"
thermos = thermos.padStart(12, "Water ")
console.log(thermos);

// padEnd()
// padEnd method pad a string with another string until it reaches the given length. The padding is applied from the right end of the string.
let colleague = "Sourabh"
colleague = colleague.padEnd(13, " Sumal")
console.log(colleague);

// charAt()
// charAt method returns the character at the specified index. String in javascript has zero based indexing.
let extBoard = "Keyboard"
console.log(extBoard.charAt(0));
console.log(extBoard.charAt(3));

// chartCodeAt()
// chartCodeAt method returns a number that represents the unicode value of the character at the specified index.
let special = "Special Characters"
console.log(special.charCodeAt(0));

// split()
// split method splits the string into an array of sub-strings. This method returns an array. This method accepts a single parameter character on which you want to split the string.
let fullName = "Arpit-All-Might"
console.log(fullName.split("-"));
