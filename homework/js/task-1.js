"use strict";
const users = ["Mango", "Poly", "Ajax", "Chelsey"];
users.shift();
console.log(users);
users.pop();
console.log(users);
users.unshift("Lux");
console.log(users);
users.push("Jay", "Kiwi");
console.log(users);
const userToDelete = users.splice(2, 1);
console.log(users);
const userToInsert = "Kong";
users.splice(2, 0, userToInsert);
console.log(users);
