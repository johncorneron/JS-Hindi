const user = {
    username: "Ashutosh",
    loginCount: 5,
    signedIn: true,
    getUserDetails: function () {
        console.log("GOT USER DETAILS FROM DATABASE");
        console.log(`USERNAME: ${this.username}`);
        console.log(this);
    }
}
console.log("USER LOGIN COUNT", user.loginCount);
user.getUserDetails()
