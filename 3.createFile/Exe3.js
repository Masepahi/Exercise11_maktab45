let fs = require('fs');

try {
    fs.appendFileSync('./newFile.txt', "salam");
    console.log('the file is created and salam appended to it');
} catch (err) {
    console.log(err);
}

// fs.appendFile('newFile.txt', 'Salam', (err) => {
//     if (err) return console.log(err);
//     console.log('the file is created and salam appended to it');
// });