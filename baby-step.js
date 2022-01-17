let numbers = [];
let sum = 0;

numbers = numbers.concat(...process.argv).filter((value,i) => i > 1).map(value => parseFloat(value));
sum = numbers.reduce((sum, value) => sum += value)
console.log(sum);