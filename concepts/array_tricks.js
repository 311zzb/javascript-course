// Create a Range of Numbers
const range = Array(100).fill(0).map((_, i) => i + 1);
// OR
const range = [...Array(100).keys()];

// Remove Duplicates from an Array
const unique = [...new Set(arr)];

// Get a Random Element
const random = arr[Math.floor(Math.random() * arr.length)];

// Loop over a Key-Value Pair
for(const [i, val] of arr.entries()) {
    console.log(i, val);
}

// Homework: Array Methods to Study
arr.forEach();
arr.map()
arr.filter();
arr.find();
arr.findIndex();
arr.reduce();
