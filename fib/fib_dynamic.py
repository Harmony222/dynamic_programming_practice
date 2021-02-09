def fib(n, fib_dict = {}):
    """ Takes a positive integer and returns the number at that position of
     the Fibonacci sequence using recursion with memoization. """
    if n in fib_dict:
        return fib_dict[n]
    if n <= 1:
        return n
    fib_dict[n] = fib(n - 1, fib_dict) + fib(n - 2, fib_dict)
    return fib_dict[n]

print(fib(0))
print(fib(1))
print(fib(2))
print(fib(4))
print(fib(8))
print(fib(50))