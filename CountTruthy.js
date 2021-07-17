//*** BAD APPROACH ***
// const values = [undefined, null, "", false, 0, NaN];
// function countTruthy(array, a) {
//   for (let value of values) {
//     return a === value || typeof a === value ? "A is Falsy" : "A is Truthy";
//   }
// }

// const output = countTruthy(values, null);
// console.log(output);
