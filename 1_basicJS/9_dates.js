// console.log(Temporal.Now.instant());
let myDate = new Date()
console.log(myDate);
console.log(typeof myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());

let myCreatedDate = new Date(2026,0,1)
console.log(myCreatedDate.toDateString());

let theCreatedDate = new Date(2026,0,1,10,30)
console.log(theCreatedDate.toLocaleString());

let customDate = new Date("1995-07-16")
console.log(customDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myDate.getTime());

let newDate = new Date()
console.log(newDate.getFullYear());
