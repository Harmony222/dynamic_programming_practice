https://www.youtube.com/watch?v=oBt53YbR9Kk

Write a function that takes in a target_sum and an array of numbers as
arguments. The function should return an array containing ANY combination
of elements that add up to exactly the target_sum. If there is no combination
that adds up to the target_sum, then return null.

Each array element may be used as many times as needed.
If there are multiple possible combinations, return any one.


how_sum(target_sum, numbers)

how_sum(7, [5, 3, 4, 7]) -> [3, 4] or [7]
how_sum(8, [2, 3, 5]) -> [3, 5] or [2, 2, 2, 2]
how_sum(7, [2, 4]) -> null
how_sum(0, [1, 2, 3]) -> [] (empty array)


can_sum(7, [5, 3, 4, 7])
Same tree as for can_sum, but instead of returning True, the base case of 0 
will return the empty set [] to its parent, the parent will add the value of
the edge to the array and in turn will return that to its parent who will do 
the same thing and repeat.
The base case of a non-zero number that cannot be subtracted further will return
null. 

               ________ [7] ______
           -5 /     -3 /   \ -4   \ -7
             /        /     \      \
           [2]     [4]       [3]    [0]
               -3 /   \-4       \-3
                 /     \         \
               [1]     [0]       [0]