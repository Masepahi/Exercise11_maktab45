const { log } = require('console');
const fs = require('fs');

let names = fs.readFileSync('./name.txt', 'utf8');
let numbers = fs.readFileSync('./numbers.txt', 'utf8');

function objectCreator(file) {
  let arr = [];
  file = file.replace(/\r/g, '').split('\n');
  for (let i = 0; i < file.length; i++) {
    if (isString(file[i].split(/-|_/)[1])) {
      arr.push({
        id: file[i].split(/-|_/)[0],
        name: file[i].split(/-|_/)[1],
      });
    } else {
      arr.push({
        id: file[i].split(/-|_/)[0],
        phoneNumber: file[i].split(/-|_/)[1],
      });
    }
  }
  return arr;
}

function isString(str) {
  let res = /^[a-zA-Z]+$/.test(str);
  return res;
}

function mergeTwoArray(data1, data2) {
  let arr = [];
  let result = data1.map((item) => {
    let result2 = data2.find((item2) => {
      return item.id === item2.id;
    });
    arr.push({ ...item, ...result2 });
  });
  return arr;
}

function mergeObjectInArray(arr) {
  let output = [];
  arr.forEach(function (item) {
    let existing = output.filter(function (v, i) {
      return v.id === item.id;
    });
    if (existing.length) {
      let existingIndex = output.indexOf(existing[0]);
      output[existingIndex].phoneNumber = output[
        existingIndex
      ].phoneNumber.concat(item.phoneNumber);
    } else {
      if (typeof item.phoneNumber == 'string')
        item.phoneNumber = [item.phoneNumber];
      output.push(item);
    }
  });
  return output;
}

function writeInformationToFile() {
  let info = mergeTwoArray(
    objectCreator(names),
    mergeObjectInArray(objectCreator(numbers))
  );

  info.forEach((item) => {
    if (item.phoneNumber) {
      if (item.phoneNumber.length > 1) {
        appendToFile(`${item.name}'s Phone numbers are ${item.phoneNumber}`);
      } else if (item.phoneNumber.length === 1) {
        appendToFile(`${item.name} Phone number is ${item.phoneNumber}`);
      }
    } else {
      appendToFile(`${item.name} hasn't any phone number.`);
    }
  });
}

function appendToFile(data) {
  fs.appendFileSync('result.txt', `\n${data}`);
}

writeInformationToFile();