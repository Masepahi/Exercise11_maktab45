const fs = require('fs');


// First part
fs.readFile("./myFiles/from.txt", "utf8", function(err, data) {
    if(err) return console.log(err);
    fs.writeFile("./myFiles/to.txt", data, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    }); 
});


// Second part
let formContent = fs.readFileSync("./myFiles/from.txt", "utf8");
console.log(formContent);
fs.writeFileSync("./myFiles/to.txt", formContent);



// Third Part
fs.readFile("./myFiles/from.txt", "utf8", function(err1, data1) {
    fs.readFile("./myFiles/append.txt", "utf8", function(err2, data2) {
        if (err1 || err2) throw err1;
        let data = data1 + data2;
        fs.writeFile("./myFiles/to.txt", data, function(err){
            if (err)  return console.log(err);
            console.log("file saved");
        })
    })
});



// Forth part
let formText = fs.readFileSync("./myFiles/from.txt", "utf8");
let appendText = fs.readFileSync("./myFiles/append.txt", "utf8")
fs.writeFileSync("./myFiles/to.txt", formText, appendText);
