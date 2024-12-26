class UserOne {
    constructor(name) {
        this.name = name
    }
    logMe() {
        console.log(`USERNAME - ${this.name}`);
    }
    // static createID() {
    createID() {
        return `9638527410`;
    }
}
const arpit = new UserOne("ARPIT");
console.log(arpit.createID());

class UserTwo extends UserOne {
    constructor(name, email) {
        super(name)
        this.email = email
    }
}

const UserThree = new UserOne("ARPIT", "INFO@MODTRENDS.COM");
UserThree.logMe()
console.log(UserThree);
console.log(UserThree.createID());