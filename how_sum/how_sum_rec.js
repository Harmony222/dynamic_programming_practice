// https://www.youtube.com/watch?v=oBt53YbR9Kk
// Time complexity = O(n^m * m)
//      n^m for tree struc and branching, then also * m for the array we
//      create for the result
// Space complexity = O(m)


const how_sum = (target_sum, numbers) => {
    if (target_sum === 0) return [];
    if (target_sum < 0) return null;

    for (let num of numbers) {
        const remainder = target_sum - num;
        const remainder_result = how_sum(remainder, numbers);
        if (remainder_result !== null) {
            // return the result from how_sum with num (the edge) added on
            return [...remainder_result, num];
        }
    }
    return null;
};


// spread syntax [...remainder_result, num] 
// spread syntax leaves the original array unchanged, but returns a new array
// with the new items appended


console.log(how_sum(7, [2, 3]));        // [3, 2, 2]
console.log(how_sum(7, [5, 3, 4, 7]));  // [4, 3]
console.log(how_sum(7, [2, 4]));        // null 
console.log(how_sum(8, [2, 3, 5]));     // [2, 2, 2, 2]
console.log(how_sum(300, [7, 14]));     // null