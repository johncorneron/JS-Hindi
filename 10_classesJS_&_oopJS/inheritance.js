class User {
    constructor(username) {
        this.username = username
    }
    logMe() {
        console.log(`USERNAME - ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }
    addCourses() {
        console.log(`A NEW COURSE WAS ADDED BY ${this.username}`);
    }
}
const userDetails = new Teacher("Hemant", "info@mnodtrends.com", "9638527410");
userDetails.addCourses()

const otherUser = new User("Bhola");
otherUser.logMe()

console.log(userDetails instanceof Teacher);