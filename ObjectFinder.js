// For Premitive DataTypes
// const numbers = [1, 2, 3, 4];
// const output = numbers.includes(5); // To find the existence of an element
// console.log(output); //If exists, it will return TRUE (Boolian output)

//For Object/Refernce DataTypes
const courses = [
  { id: 1, name: "Injamul" },
  { id: 2, name: "Rashik" },
];
const output = courses.find(function (course) {
  return course.name == "Injamul";
});
console.log(output);
