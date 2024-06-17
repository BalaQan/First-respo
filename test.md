def all_unique(lst):
    return len(lst) == len(set(lst))


x = [1,1,2,2,3,2,3,4,5,6,7,7,8,9,8]
y = [1,2,3,4,5,6,7,8,9]
all_unique(x) # True
all_unique(y) # False
