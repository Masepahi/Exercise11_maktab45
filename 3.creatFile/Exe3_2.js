let fs = require('fs');

try {
    fs.appendFileSync('./newfile.txt', "salam");
    console.log('The "data to append" was appended to file!');
} catch (err) {
    console.log(err);
}

fs.accessSync('./newfile.txt', function (err) {
    if (err) console.log(err);
    console.log("The File Exist");
}) 