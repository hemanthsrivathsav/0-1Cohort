/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length ){
    return false;
  }else{
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    
    const ar1 = str1.split("");
    const ar2 = str2.split("");

    ar1.sort();
    ar2.sort();
    for (let i=0 ; i<str1.length ; i++){
      if (ar1[i]!=ar2[i]){
        return false ;
      }
    }
    return true ;
  }
}

module.exports = isAnagram;

console.log(isAnagram('twist','wistt'));