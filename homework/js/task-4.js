"use strict";
const findLongestWord = function(string) {
  const words = string.split(" ");
  let longest = words[0];
  for (const word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

console.log(findLongestWord("Google do a roll"));

console.log(findLongestWord("May the force be with you"));
// const rebok = "Вызовы функции для проверки работоспособности твоей реализации.";
// const string = rebok.split(" ");
// console.log(string);
