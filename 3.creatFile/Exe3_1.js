let fs = require('fs');

fs.writeFile('./newfile.txt', 'Learn Node module', function (err) {
    if (err) console.log(err); 
    console.log('File is created successfully.');
});


fs.access('./newfile.txt', function (err) {
    if (err) console.log(err);
    console.log("The File Exist");
});
    
