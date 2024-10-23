// for of

// arrays ["", "", ""]
// object in arrarys [{}, {}, {}]
const myArr = [5, 4, 3, 2, 1]
for (const number of myArr) {
    console.log(number);
}

const newSupe = "ARPITALLMIGHT"
for (supeFor of newSupe) {
    console.log(`Each Character is - ${supeFor}`);
}

// maps
const map = new Map()
map.set("IN", "India")
map.set("AU", "Australia")
map.set("BH", "Bahamas")
map.set("BE", "Belgium")
map.set("BE", "Belgium") // Maps only show unique value
console.log(map);

// Adding for of loop in map
for (const obj of map) {
    console.log(obj);
}

// doing de-structure of array
for (const [obj, value] of map) {
    console.log(obj, "-", value);
}

const myGame = {
    'Game 1': 'Assasins Creed',
    'Game 2': 'Real Racing 3',
    'Game 3': 'Vector',
    'Game 4': 'Splinter Cell: Double Agent',
    'Game 5': 'Soul Of Darkness'
}