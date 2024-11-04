const coding = ['html','css','js','jquery','wp','php']
coding.forEach(function (value) {
    console.log(value);
})

coding.forEach( (item) => {
    console.log(item);
})

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
});

const programmingLan = [
    {
        languageName: "JAVASCRIPT",
        languageFileName: "js"
    },
    {
        languageName: "CSS3",
        languageFileName: "css"
    },
    {
        languageName: "HTML5",
        languageFileName: "html"
    }
]

programmingLan.forEach( (item) => {
    console.log(item.languageName);
});