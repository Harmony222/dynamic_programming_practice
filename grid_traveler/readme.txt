https://www.youtube.com/watch?v=oBt53YbR9Kk

Say that you are a traveler on a 2D grid. You begin in the top-left corner
and your goal is to travel to the bottom-right corner. You may only move down
or right.

In how many ways can you travel to the goal on a grid with dimensions m * n?

2 x 3 grid:
-------------------------
|       |       |       |
|       |       |       |
|       |       |       |
-------------------------
|       |       |       |
|       |       |       |
|       |       |       |
-------------------------

Create a tree structure to visualize. Each branch represents a movement,
down or right. 
A leaf (base case) that includes 0 means there are 0 ways to travel in a 
grid with one dimension equal to zero. 
Leaf (base case) of 1,1 -> 1 way to travel in a grid with dimensions of 1x1.
Return ways to travel to parent and sum them up.

                 ______ [2,3] ______
                /                   \
            [1,3]                   [2,2]
            /   \                 /      \
        [0,3]   [1,2]          [1,2]      [2,1]
                /   \          /   \     /      \
            [0,2]   [1,1]  [0,2]  [1,1] [1,1]   [0,0]


