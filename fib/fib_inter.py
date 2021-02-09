# Program with a function named fib that takes a positive integer parameter
# and returns the number at that position of the Fibonacci sequence.
# Fib number 0 = 0. The first and second numbers in the Fibonacci sequence 
# are both 1. After that, each subsequent number is the sum of the two 
# preceding numbers.


def fib(x):
    """ Takes a positive integer and returns the number at that position of
     the Fibonacci sequence using iteration. """
    num1 = 0
    num2 = 1
    for n in range(0, x):
        num1, num2 = num2, num1 + num2
    return num1

print(fib(0))
print(fib(1))
print(fib(2))
print(fib(4))