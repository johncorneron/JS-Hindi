function setUserName(username) {
    this.username = username
    console.log("setUserName is Called");
}

function createUser(username, email, password) {
    setUserName.call(this, username)
    this.email = email
    this.password = password
}

const user = new createUser("Bhomsar", "info@bhomsar.com", "9638521470")
console.log(user);