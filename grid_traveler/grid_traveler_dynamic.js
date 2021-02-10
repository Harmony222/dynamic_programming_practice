// time complexity = O(m*n)
// space complexity = O(n + m)

function grid_traveler(m, n, memo = {}) {
    // grid of 2 x 3 is the same as 3 x 2, use lower value first in key
    // followed by , + greater value
    const key = (m < n) ? (m + "," + n) : (n + "," + m);
    
    if (key in memo) return memo[key];
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;

    memo[key] = grid_traveler(m - 1, n, memo) + grid_traveler(m, n - 1, memo);
    return memo[key];
};

console.log(grid_traveler(1, 1)); // 1
console.log(grid_traveler(2, 3)); // 3
console.log(grid_traveler(3, 2)); // 3
console.log(grid_traveler(3, 3)); // 6
// console.log(grid_traveler(18, 18)); 