/*
  Implement a function `isPalindrome` which takes a string as argument and
   returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan'
   is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    let i = 0;
    let j = cleanStr.length - 1;
  
    while (i <= j) {
      if (cleanStr[i] !== cleanStr[j]) {
        return false;
      }
      i++;
      j--;
    }
  
    return true;
}

module.exports = isPalindrome;
