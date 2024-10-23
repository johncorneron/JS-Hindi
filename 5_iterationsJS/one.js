// Loops

for (let loopNum = 0; loopNum <= 10; loopNum++) {
    const element = loopNum;
    console.log(element);
}

for (let anotherNum = 0; anotherNum <= 10; anotherNum++) {
    const element = anotherNum;
    if (element == 5) {
        console.log("The Number Five");
    }
    console.log(element);
}

// 2 Loops
for (let a = 0; a <= 1; a++) {
    console.log(`Outer Loop Value ${a}`);
    for (let b = 0; b <= 1; b++) {
        console.log(`Outer Loop Value ${a} & Inner Loop value ${b}`);
    }
}


for (let c = 1; c <= 5; c++) {
    console.log(`Outer Loop Value ${c}`);
    for (let d = 1; d <= 5; d++) {
        console.log( c + " * " + d + " = " + c * d );
    }
}

// Array
let supes = ["Nagraj", "Super Commando Dhruva", "Parmanu"]
console.log(supes.length);

for (let index = 0; index < supes.length; index++) {
    const element = supes[index];
    console.log(element);
}