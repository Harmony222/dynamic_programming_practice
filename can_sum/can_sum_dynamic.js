// Time complexity = O(m*n)
// Space complexity = O(m)

const can_sum = (target_sum, numbers, memo = {}) => {
    if (target_sum in memo) return memo[target_sum];
    if (target_sum === 0) return true;
    if (target_sum < 0) return false;

    for (let num of numbers) {
        const remainder = target_sum - num;
        if (can_sum(remainder, numbers, memo) === true) {
            memo[target_sum] = true;
            return true;
        }
    }
    memo[target_sum] = false;
    return false;
}

console.log(can_sum(7, [2, 3]));        // true
console.log(can_sum(7, [5, 3, 4, 7]));  // true
console.log(can_sum(7, [2, 4]));        // false
console.log(can_sum(8, [2, 3, 5]));     // true
console.log(can_sum(300, [7, 14]));     // false