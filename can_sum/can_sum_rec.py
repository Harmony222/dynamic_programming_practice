def can_sum(target_sum, numbers):
    if target_sum == 0:
        return True
    if target_sum < 0:
        return False
    
    for num in numbers:
        if can_sum(target_sum - num, numbers):
            return True
    
    return False


print(can_sum(7, [2, 3]))        # true
print(can_sum(7, [5, 3, 4, 7]))  # true
print(can_sum(7, [2, 4]))        # false
print(can_sum(8, [2, 3, 5]))     # true
print(can_sum(300, [7, 14]))     # false