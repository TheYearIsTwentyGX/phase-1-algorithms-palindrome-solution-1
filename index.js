function isPalindrome(word) {
  // Write your algorithm here
  return (word === reverseString(word))

  function reverseString(word) {
    return word.split("").reverse().join("");
  }
}

/* 
  reverse the input string
  if the reversed string is the same as the input
    return true
  else
    return false
*/

/*
  Check if word is equal to the word reversed via spliting the word into a character array, reversing the array, then joining the array. Return equality test result
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
