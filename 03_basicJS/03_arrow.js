const user = {
    username: "Arpit",
    price: 1000,
    welcomeMessage: function () {
        console.log(`Hello ${this.username}, Welcome to our website`);
        console.log(this);
        
        
    }
}
user.welcomeMessage()

function global() {
    console.log(this);
}
global()
