const myObject = {
    HTML: "Hypertext Markup Language",
    CSS: "Cascading Style Sheets",
    JS: "JavaScript",
    RB: "Ruby",
}
for (const key in myObject) {
    console.log(key);
}
for (const key in myObject) {
    console.log(myObject[key]);
}
for (const key in myObject) {
    console.log(`${key} is shortcut for ${myObject[key]}`);
}

const programming = ['html','css','js','wp','php']
for (const key in programming) {
    console.log(programming[key]);
}
