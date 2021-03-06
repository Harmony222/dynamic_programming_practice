// Time complexity O(n^m)
// Space complexity O(m)


const can_sum = (target_sum, numbers) => {
    if (target_sum === 0) return true;
    if (target_sum < 0) return false;

    for (let num of numbers) {
        if (can_sum(target_sum - num, numbers) === true) {
            return true;
        }
    }
    return false;
}

console.log(can_sum(7, [2, 3]));        // true
console.log(can_sum(7, [5, 3, 4, 7]));  // true
console.log(can_sum(7, [2, 4]));        // false
console.log(can_sum(8, [2, 3, 5]));     // true
console.log(can_sum(300, [7, 14]));     // false