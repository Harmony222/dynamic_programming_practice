// time complexity = O(2^n)
// Space complexity = O(n)

// Nice explanation and math to solve time complexity
// https://www.baeldung.com/cs/fibonacci-computational-complexity



const fib = (n) => {
    if (n <= 1) return n;
    return fib(n-1) + fib(n-2);
};

// console.log(fib(0));
// console.log(fib(1));
// console.log(fib(2));
// console.log(fib(5));
// console.log(fib(40));



// time complexity = O(n)
// space complexity = O(1)

const fib_rec_improved = (counter, current = 1, prev = 1) => {
    if (counter === 0) return 0;
    if (counter === 1) return prev;
    return fib_rec_improved(counter - 1, current + prev, current);
}

console.log(fib_rec_improved(0));
console.log(fib_rec_improved(1));
console.log(fib_rec_improved(2));
console.log(fib_rec_improved(5));
console.log(fib_rec_improved(50));