// First Style
const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("FIRST ASYNC TASK IS COMPLETED");
        resolve()
    }, 2000);
})
promiseOne.then(() => {
    console.log("FIRST PROMISE CONSUMED");
})

// Second Style
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("SECOND ASYNC TASK IS COMPLETED");
        resolve()
    }, 3000);
}).then(() => {
    console.log("SECOND PROMISE IS ALSO COMPLETED");
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("THIRD ASYNC TASK IS COMPLETED");
        resolve({
            "results": [
              {
                "gender": "male",
                "name": {
                  "title": "Mr",
                  "first": "Cecil",
                  "last": "Palmer"
                },
                "location": {
                  "street": {
                    "number": 3848,
                    "name": "Mill Road"
                  },
                  "city": "Longford",
                  "state": "South Dublin",
                  "country": "Ireland",
                  "postcode": 40814,
                  "coordinates": {
                    "latitude": "-3.7252",
                    "longitude": "-48.6687"
                  },
                  "timezone": {
                    "offset": "+1:00",
                    "description": "Brussels, Copenhagen, Madrid, Paris"
                  }
                },
                "email": "cecil.palmer@example.com",
                "login": {
                  "uuid": "2b7679d5-0315-4a4c-89d0-3ac5c41844e0",
                  "username": "ticklishbear275",
                  "password": "minerva",
                  "salt": "amhtPrXF",
                  "md5": "1f151541c85930c0fdf3e8cf3ac75fa7",
                  "sha1": "18cb7b62cfe7159082fb294cfb99091c483e7067",
                  "sha256": "a6f668b734d72f8f52645a287e04d156de73d21800a9394fe17e93ba63bced39"
                },
                "dob": {
                  "date": "1983-05-29T06:42:59.750Z",
                  "age": 41
                },
                "registered": {
                  "date": "2017-05-18T04:21:37.291Z",
                  "age": 7
                },
                "phone": "061-315-2280",
                "cell": "081-567-7127",
                "id": {
                  "name": "PPS",
                  "value": "6273576T"
                },
                "picture": {
                  "large": "https://randomuser.me/api/portraits/men/34.jpg",
                  "medium": "https://randomuser.me/api/portraits/med/men/34.jpg",
                  "thumbnail": "https://randomuser.me/api/portraits/thumb/men/34.jpg"
                },
                "nat": "IE"
              }
            ],
            "info": {
              "seed": "573515c63b5d2df7",
              "results": 1,
              "page": 1,
              "version": "1.4"
            }
          })
    }, 4000);
})
promiseThree.then((user) => {
    console.log(user);
    console.log("THIRD PROMISE IS ALSO COMPLETED");
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({USERNAME: "ARPIT", PASSWORD: "1234567890"})
            console.log("FOURTH ASYNC TASK IS COMPLETED");
        } else {
            reject("ERROR! SOMETHING WENT WRONG.")
        }
    }, 5000);
})
promiseFour.then((user) => {
    console.log(user);
    return user.USERNAME
}).then((un) => {
    console.log(un);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("THE PROMISE IS EITHER RESOLVE OR REJECTED");
})

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false
    if (!error) {
      resolve({username: "Bhomsar", password: "9638527410"})
      console.log("FIFTH ASYNC TASK IS COMPLETED");
    } else {
      reject("Error! Something Went Wrong")
    }
  }, 7000);
})
async function consumePromiseFive() {
  try {
    const response = await promiseFive
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive()

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    console.log(data);
  } catch (error) {
    console.log("Error! Something Went Wrong");
  }
}
getAllUsers()

const allPosts = fetch("https://jsonplaceholder.typicode.com/posts")
allPosts.then((response) => {
  return response.json()
}).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);  
})
