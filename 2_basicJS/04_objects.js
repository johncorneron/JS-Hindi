// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "UserName"
tinderUser.name = "Bhanu Pratap"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const otherUser = {
    email: "some@gmail.com",
    fullname: {
        firstname: "Gagan",
        lastname: "Chaurasia"
    }
}
// console.log(otherUser);
console.log(otherUser.email);
console.log(otherUser.fullname);
console.log(otherUser.fullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}
const obj4 = Object.assign({}, obj1, obj2, obj3)

// console.log(obj4);
const obj5 = {...obj1, ...obj2, ...obj3}
console.log(obj5);

console.log(tinderUser.hasOwnProperty('isLoggedIn'));




function toGreet() {
    console.log("Hello There");
}
let myObj = {
    great: toGreet,
    byWhom: function() {
        console.log(" From The Website Dot Com");
    }
}
myObj.great()

// Destructuring
const course = {
    courseName: "JavaScript",
    price: "599",
    courseInstructor: "Arpit"
}
// const {courseName} = course
// console.log(courseName);
const {courseName: cn} = course
console.log(cn);

// JSON - Brief Introduction For API

// API's in JSON/Object Format

{
    "animeName": "Demon Slayer",
    "seasonOne": "Final Selection Arc",
    "seasonTwo": "Mugen Train Arc",
    "seasonThree": "Swordsmith Village Arc",
    "seasonFour": "Entertainment District Arc",
    "seasonFive": "Hashira Training Arc"
}

// API's in Array & Nested Object Format

[
    {},
    {},
    {},
    {}
]

// Random User API
// https://randomuser.me/
// https://jsonformatter.org/

{
    "results": [
      {
        "gender": "female",
        "name": {
          "title": "Miss",
          "first": "Jennie",
          "last": "Nichols"
        },
        "location": {
          "street": {
            "number": 8929,
            "name": "Valwood Pkwy"
          },
          "city": "Billings",
          "state": "Michigan",
          "country": "United States",
          "postcode": "63104",
          "coordinates": {
            "latitude": "-69.8246",
            "longitude": "134.8719"
          },
          "timezone": {
            "offset": "+9:30",
            "description": "Adelaide, Darwin"
          }
        },
        "email": "jennie.nichols@example.com",
        "login": {
          "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
          "username": "yellowpeacock117",
          "password": "addison",
          "salt": "sld1yGtd",
          "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
          "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
          "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
        },
        "dob": {
          "date": "1992-03-08T15:13:16.688Z",
          "age": 30
        },
        "registered": {
          "date": "2007-07-09T05:51:59.390Z",
          "age": 14
        },
        "phone": "(272) 790-0888",
        "cell": "(489) 330-2385",
        "id": {
          "name": "SSN",
          "value": "405-88-3636"
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/75.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
        },
        "nat": "US"
      }
    ],
    "info": {
      "seed": "56d27f4a53bd5441",
      "results": 1,
      "page": 1,
      "version": "1.4"
    }
  }
