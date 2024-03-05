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
}


function twoSum(nums, target) {
  // Your code here
}


function wordPattern(pattern, strings) {
  // Your code here
}


module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];