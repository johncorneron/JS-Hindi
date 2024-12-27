class user {
    constructor(email, password) {
        this.email = email
        this.password = password
    }
    // get password() {
    //    return this.newPassword.toUpperCase(); 
    // }
    get password() {
       return `${this.newPassword.toUpperCase()}keypad`; 
    }
    set password(value) {
        this.newPassword = value;
    }
}
const arpit = new user("info@mail.com", "3216549870qwerty");
console.log(`Your Password - ${arpit.password}`);