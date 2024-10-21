// Immediately Invoked Function Expressions (IIFE)

function chai() {
    console.log("DB Connected");
}
chai();

(function dataBase() {
    console.log("DataBase One Connected");
})();

(function dataBaseTwo() {
    console.log("DataBase Two Connected");
})();

( () => {
    console.log("DataBase Three Connected");
} )();

( (property) => {
    console.log(`Database Conneted To The New ${property}`);
    
} )("Server")
