const name = "Krishn"
const repoCount = 2

//console.log(name  +  repoCount + "value");


console.log(`my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('krishn-bs')


// console.log(gameName[0]);
// console.log(gameName.__proto__)
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-4,4)
console.log(anotherString);

const newStringOne = "    Krishn    ";

console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://krishn.com/krishn%20siddhapara";

console.log(url.replace('%20' , '_'));


console.log(url.includes('sundar'))

console.log(gameName.split('-'))
