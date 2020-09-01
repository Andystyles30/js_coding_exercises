const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  index = nums.indexOf(n);
  if(index >= 0 && index < nums.length - 1)
    return nextItem = nums[index + 1]
  else
    return null;
};

const count1sand0s = str => {
  var sum = 0;
  for (num in str) {
    sum += Number(str[num]);
  }
  return {
    1 : sum,
    0 : str.length - sum
  };
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  return (
    parseFloat(
      n
        .toString()
        .split('')
        .reverse()
        .join('')
    ) * Math.sign(n)
  )  
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
