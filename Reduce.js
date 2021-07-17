// Reduce works like sum of elements of an array
const numbers = [2, 3, -6, 8];

const output = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); // Here 0 is the value of accumulator just like sum=0 and sum=sum+1
console.log(output);
