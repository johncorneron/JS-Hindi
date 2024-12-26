// ES6

class userInfo {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }
    encryptPassword() {
        return `${this.password}ABCDEFGH`;
    }
    changeUserName() {
        return `${this.username.toUpperCase()}`;
    }
}
const newUser = new userInfo("Manish", "info@manish.com", "9638527410")
console.log(newUser.encryptPassword());
console.log(newUser.changeUserName());
