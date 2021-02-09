// https://www.youtube.com/watch?v=oBt53YbR9Kk
// dynamic programming function from Dynamic Programming 
// freeCodeCamp.org youTube video

// fib recursive using memoization
// Time complexity = O(n)
// Space complexity = O(n)


const fib = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
};

console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(4));
console.log(fib(8));
console.log(fib(50));
