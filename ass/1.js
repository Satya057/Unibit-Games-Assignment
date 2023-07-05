function findCombinations(nums, target) {
  const pairs1 = [];
  const mergedArray = [];
  const pairs2 = [];

  // Find the first combination of pairs
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        pairs1.push([nums[i], nums[j]]);
      }
    }
  }

  // Merge the pairs into a single array and sort it
  mergedArray.push(...pairs1.flat().sort((a, b) => a - b));

  // Double the target value
  target *= 2;

  // Find the second combination of pairs
  for (let i = 0; i < mergedArray.length; i++) {
    for (let j = i + 1; j < mergedArray.length; j++) {
      if (mergedArray[i] + mergedArray[j] === target) {
        pairs2.push([...mergedArray.slice(i, j + 1)]);
      }
    }
  }

  return [pairs1, mergedArray, pairs2];
}

// Test case
const nums = [1, 3, 2, 2, -4, -6, -2, 8];
const target = 4;

const [pairs1, mergedArray, pairs2] = findCombinations(nums, target);

console.log(`First Combination For ${target}:`, pairs1);
console.log("Merge Into a single Array:", mergedArray);
console.log(`Second Combination For ${target * 2}:`, pairs2);
