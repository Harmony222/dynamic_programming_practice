https://www.youtube.com/watch?v=oBt53YbR9Kk

Write a function that takes in a target_sum and an array of numbers as
arguments.

The function should return a boolean indicating whether or not it is possible
to generate the target_sum using numbers from the array.

Each array element may be used as many times as needed.
All input numbers are nonnegative.


can_sum(7, [5, 3, 4, 7]) -> true

               ________ [7] ______
           -5 /     -3 /   \ -4   \ -7
             /        /     \      \
           [2]     [4]       [3]    [0]
               -3 /   \-4       \-3
                 /     \         \
               [1]     [0]      [0]

Can always generate a sum of zero by taking no elements - so base cases
that reach 0 return True.
Base cases that end in a value other than zero, whose value cannot be 
further reduced, return false.

m = target sum
n = array length

Height of tree is at most m (worse case scenario subtract 1 from target sum at each level)
Each node will have at most n children (length of array) -> n * n * n * n... = n^m


can_sum(7, [2, 4]) -> false

                [7]
            -2 /   \ -4
              /     \   
           [5]       [3]
       -2 /   \-4       \ -2
         /     \         \
       [3]     [1]       [1]
     -2 |
        |
       [1]