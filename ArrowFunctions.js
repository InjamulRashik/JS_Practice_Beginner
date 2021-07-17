const courses = [
  { id: 01, name: "Webtech" },
  { id: 02, name: "ATP3" },
];

const output = courses.findIndex((course) => course.name === "ATP2");
console.log(output);
