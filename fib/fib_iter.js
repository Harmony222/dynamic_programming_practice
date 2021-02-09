const fib = (n) => {
    let num1 = 0;
    let num2 = 1;
    for (i = 0; i < n; i++) {
        [num1, num2] = [num2, num1+num2];
    }
    return num1
};


console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(5));
