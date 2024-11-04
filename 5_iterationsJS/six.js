const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNews = myNums.filter( (item) => {
    return item >= 5
} )
console.log(newNews);

const books = [
    {
        title: "Book One",
        genre: "Fiction",
        genre: "Fiction",
        publish: 1995,
        edition: 2000
    },
    {
        title: "Book Two",
        genre: "Non-Fiction",
        publish: 1996,
        edition: 2005
    },
    {
        title: "Book Three",
        genre: "Thriller",
        publish: 1997,
        edition: 2010
    },
    {
        title: "Book Four",
        genre: "Fantasy",
        publish: 1998,
        edition: 2015
    },
    {
        title: "Book Five",
        genre: "Sci-Fi",
        publish: 1999,
        edition: 2020
    },
    {
        title: "Book Six",
        genre: "Fiction",
        genre: "Fiction",
        publish: 1995,
        edition: 2000
    },
    {
        title: "Book Seven",
        genre: "Non-Fiction",
        publish: 1996,
        edition: 2005
    },
    {
        title: "Book Eight",
        genre: "Thriller",
        publish: 1997,
        edition: 2010
    },
    {
        title: "Book Nine",
        genre: "Fantasy",
        publish: 1998,
        edition: 2015
    },
    {
        title: "Book Ten",
        genre: "Sci-Fi",
        publish: 1999,
        edition: 2020
    }
]

// Filter 1
// let userBooks = books.filter( (item) => {
    //     return item.genre === "Fantasy"
    // } )

// Filter 2
// let userBooks = books.filter( (item) => {
    //     return item.publish <= 2000
    // } )

// Filter 3
let userBooks = books.filter( (item) => {
    return item.genre === "Fantasy" && item.publish <= 2000
} )
console.log(userBooks);
