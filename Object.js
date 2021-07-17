// OOP
// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1,
//   },
//   isVisible: true,
//   draw: function (x, y) {
//     let sum = 0;
//     sum = x + y;
//     console.log(sum);
//     // console.log("This is Draw Function");
//   },
// };

// circle.draw(5, 6);

// **Factory Function */
// function createCircle(radius) {
//   return {
//     radius,
//     draw(x, y) {
//       let sum = 0;
//       sum = x + y;
//       console.log(sum);
//     },
//   };
// }

// const circle1 = createCircle(1);
// console.log(circle1);
// const output = circle1.draw(5, 6);
// console.log(output);

//** Constructor Function */ (Pacal Notation)
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("This is Draw");
//   };
// }

// const circle = new Circle(1);
