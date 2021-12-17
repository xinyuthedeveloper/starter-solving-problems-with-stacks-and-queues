const Stack = require("../lib/stack");

const isPalindrome = (sentence) => {
  sentence = sentence.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  // Your solution here
  let middle = Math.floor(sentence.length / 2);
  const stack = new Stack();

  for (let i = 0; i < middle; i++) {
    stack.push(sentence[i]);
  }

  middle += sentence.length % 2 === 0 ? 0 : 1;

  for (let i = middle; i < sentence.length; i++) {
    if (sentence[i] !== stack.pop()) {
      return false;
    }
  }

  return true;
};

module.exports = isPalindrome;
