def grid_traveler(m, n, memo = None):
    # assign empty dictionary if first pass through
    if memo is None:
        memo = {}
    # create string from m and n with lower value first (grid of 2x3
    # has same number of moves as 3x2)
    key = "%s,%s"%(m,n) if m < n else "%s,%s"%(n,m)
    # check memo for key
    if key in memo:
        return memo[key]
    # base cases
    if m == 1 and n == 1:
        return 1
    if m == 0 or n == 0:
        return 0
    # assign key a value with recursive call to function
    memo[key] = grid_traveler(m - 1, n, memo) + grid_traveler(m, n - 1, memo)
    return memo[key]


print(grid_traveler(1,1))
print(grid_traveler(2,3))
print(grid_traveler(3,2))
print(grid_traveler(3,3))
print(grid_traveler(18,18))