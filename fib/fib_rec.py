# Fib number 0 = 0. The first and second numbers in the Fibonacci sequence 
# are both 1. After that, each subsequent number is the sum of the two 
# preceding numbers.


def fib(n):
    """ Takes a positive integer and returns the number at that position of
     the Fibonacci sequence using recursion. """
    if n <= 1:
         return n
    return fib(n-1) + fib(n-2)


# print(fib(0))
# print(fib(1))
# print(fib(2))
# print(fib(4))


def fib_rec_improved(counter, current=1, prev=1):
    if counter == 0:
        return 0
    if counter == 1:
        return prev
    return fib_rec_improved(counter-1, current+prev, current)

print(fib_rec_improved(0))
print(fib_rec_improved(1))
print(fib_rec_improved(2))
print(fib_rec_improved(5))
print(fib_rec_improved(10))
print(fib_rec_improved(50))

