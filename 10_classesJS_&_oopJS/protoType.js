const myHeros = ["Nagraj", "Parmanu", "Inspector Steel"]
const heroPower = {
    nagraj: "Millions Of SuperNatural Snakes",
    parmanu: "Atomic Level Suit",
    inspectorSteel: "Fully Robotic Body",

    nagrajPower: function () {
        console.log(`He Has ${this.nagraj} Inside His Body`);
    }
}

Object.prototype.power = function () {
    console.log("OBJECT - POWER IS PRESENT IN ALL UPERHEROES");
}

Array.prototype.allPower = function () {
    console.log("ARRAY - POWER IS PRESENT IN ALL UPERHEROES");
}

// heroPower.power()
myHeros.power()
myHeros.allPower()

const newName = "Arpit         "
String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True Length: ${this.trim().length}`);
}
newName.trueLength()

"ArpitOjha".trueLength()
"SourabhRajput".trueLength()