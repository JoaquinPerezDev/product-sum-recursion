// Write a function that takes in a "special" array and return it's product sum.
// A "special" array is a non-empty array that contains either integers or other
// "special" arrays. The product sum of a "special" array is the sum of its elements,
// where special arrays inside it are summed themselves and then multiplied by their
// level of depth.

// The depth of a special array is how far nested it is. For instance, the depth of
// [] is 1; the depth of a nested array [[]] is 2; the depth of the innermost array
// in [[[]]] is 3.

// Therefore, the product sum of [x, y] is x + y; the product sum of [x, [y, z]] is
// x + 2 * (y + z); the product sum of [x, [y, [z]]] is x + 2 * (y + 3z).

// Sample input: array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]]

// Sample output: 12 = (5 + 2 + 2 * (7 - 1) + 3 + 2 * (6 + 3 * (-13 + 8) + 4)

//Naive approach: The first thing that comes to mind is to loop through the array
//and check whether the value at each index is an array or integer. If it's an integer,
//we add that value to the currentSum. If it's an array,we make a depth level counter
//and increase it and we set sum value to zero.


//O(n) time | O(1) space complexity
function productSum(array, depth = 1) {
  // Write your code here.
  let currentSum = 0;

  for (let i of array) {
    if (Array.isArray(i)) {
      currentSum += productSum(i, depth + 1);
    } else currentSum += i;
  }
  return currentSum * depth;
}

