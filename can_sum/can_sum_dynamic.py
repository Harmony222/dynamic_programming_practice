
def can_sum(target_sum, numbers, memo = None):
    # assign memo to empty dictionary on first pass
    if memo is None:
        memo = {}
    # check memo for target sum
    if target_sum in memo:
        return memo[target_sum]
    # base cases
    if target_sum == 0:
        return True
    if target_sum < 0:
        return False
    # for each val in numbers, subtract val from target and recursively
    # call can_sum; store can_sum result (True or False) in memo with 
    # target_sum as key
    for num in numbers:
        remainder = target_sum - num
        if can_sum(remainder, numbers, memo):
            memo[target_sum] = True
            return True
    
    memo[target_sum] = False
    return False


print(can_sum(7, [2, 3]))        # true
print(can_sum(7, [5, 3, 4, 7]))  # true
print(can_sum(7, [2, 4]))        # false
print(can_sum(8, [2, 3, 5]))     # true
print(can_sum(300, [7, 14]))     # false