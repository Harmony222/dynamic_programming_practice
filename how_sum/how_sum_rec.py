
def how_sum(target_sum, numbers):
    if target_sum == 0:
        return []
    if target_sum < 0:
        return None
    
    for num in numbers:
        remainder = target_sum - num
        remainder_result = how_sum(target_sum - num, numbers)
        if remainder_result is not None:
            # return remainder_result + [num]
            return [*remainder_result, num]
    
    return None


print(how_sum(7, [2, 3]))        # [3, 2, 2]
print(how_sum(7, [5, 3, 4, 7]))  # [4, 3]
print(how_sum(7, [2, 4]))        # null 
print(how_sum(8, [2, 3, 5]))     # [2, 2, 2, 2]
print(how_sum(300, [7, 14]))     # null