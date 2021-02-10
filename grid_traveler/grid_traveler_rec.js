// Time complexity = O(2^(n+m))
// Space complexity = O(n + m)

function grid_traveler(m, n) {
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;
    return grid_traveler(m - 1, n) + grid_traveler(m, n - 1);
};

console.log(grid_traveler(1, 1)); // 1
console.log(grid_traveler(2, 3)); // 3
console.log(grid_traveler(3, 2)); // 3
console.log(grid_traveler(3, 3)); // 6
// console.log(grid_traveler(18, 18)); 