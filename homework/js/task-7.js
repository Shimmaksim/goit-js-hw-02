"use strict";
let input;
const numbers = [];
let total = 0;

// input = prompt("Введите число");

// const userNumber = function(input) {
//   do {
//     numbers.push(input);
//     if (input !== null) {
//       for (const i = 0; i < numbers.length; i++) {
//         total += numbers[i];
//       }
//     }
//   } while (input !== null);
//   return alert(`Общая сумма чисел равна ${total}`);
// };

do {
  input = prompt("Введите число");
  if (input !== null) {
    numbers.push(Number(input));
  }
} while (input !== null);

function arraySum(total) {
  for (var i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

alert(`Общая сумма чисел равна ${arraySum(total)}`);

// let user = function(numbers) {
//   for (const i = 0; i < numbers.length; i++) {
//     total += numbers[i];
//   }
//   return total;
// };
// console.log(total);

// var yoga = [3, 2, 5, 6];
// var sum = 0;
// function arraySum(yoga) {
//   for (var i = 0; i < yoga.length; i++) {
//     sum += yoga[i];
//   }
//   return sum;
// }
// alert(arraySum(yoga));
