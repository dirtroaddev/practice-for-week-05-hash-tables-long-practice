function anagrams(str1, str2) {
  // Your code here
  let nSet = new Set(str1);
  for(let i = 0; i < str2.length; i += 1) {
    if(nSet.has(str2[i])) {
      continue;
    } else {
      return false;
    }

  }

  return true;
}


function commonElements(arr1, arr2) {
  // Your code here
  let nSet = new Set(arr1);
  let arr = [];

  for (let i = 0; i < arr2.length; i += 1) {
    if(nSet.has(arr2[i])) {
      arr.push(arr2[i]);
    }
  }

  return arr;
}


function duplicate(arr) {

  // Your code here
  let nSet = new Set();

  for(let i = 0; i < arr.length; i += 1) {
    if(nSet.has(arr[i])) {
      return arr[i]
    } else {
      nSet.add(arr[i]);
    }
  }
}


function twoSum(nums, target) {
  // Your code here
  let nSet = new Set();
  
  for(let i = 0; i < nums.length; i += 1) {
    let compliment =target - nums[i];
    if(nSet.has(compliment)) {
      return true;
    } else {
      nSet.add(nums[i]);
    }
  }
  
  return false;

}


function wordPattern(pattern, strings) {
  if (pattern.length !== strings.length) {
    return false; // Early return if lengths differ, cannot match
  }

  const charToWord = new Map();
  const wordToChar = new Map();

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = strings[i];

    // Check if the mapping exists in either map
    if ((charToWord.has(char) && charToWord.get(char) !== word) ||
        (wordToChar.has(word) && wordToChar.get(word) !== char)) {
      return false; // Mismatch found
    }

    // Create mapping if not already present
    charToWord.set(char, word);
    wordToChar.set(word, char);
  }

  return true; // All elements matched correctly
}


module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];