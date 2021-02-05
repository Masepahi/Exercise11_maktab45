const fs = require('fs');

let names = fs.readFileSync('./name.txt', 'utf8').split("\n");
let numbers = fs.readFileSync('./numbers.txt', 'utf8').split("\n");


let nameArray = [];
let numberArray = [];


names.forEach((el) => {
  let obj = {};
  obj.id = el.split("-")[0];
  obj.name = el.split("-")[1];
  nameArray.push(obj);
});

numbers.forEach((el) => {
  let obj = {};
  obj.id = el.split("-")[0];
  obj.numbers = el.split("-")[1];
  numberArray.push(obj);
});




function merger(data1, data2) {
  let arr = [];
  let result = data1.map((item) => {
    let result2 = data2.find((item2) => {
      return item.id === item2.id;
    });
    arr.push({ ...item, ...result2 });
  });
  return arr;
}

let nameNumbers = merger(nameArray, numberArray);

console.log(nameNumbers);

function mapper() {
  nameNumbers.forEach((item) => {
    if (item.numbers) {
      if (item.numbers.length > 1) {
        console.log(`${item.name}'s Phone numbers are ${item.numbers}`);
      } else if (item.numbers.length === 1) {
        console.log(`${item.name} Phone number is ${item.numbers}`);
      }
    } else {
      console.log(`${item.name} hasn't any phone number.`);
    }
  });
}


mapper()