size = int(input())
numbers = list(map(int, input().split()))
weighted = list(map(int, input().split()))

sum_items = 0
for i in range(size):
    sum_items = sum_items + (numbers[i] * weighted[i])

print(round(sum_items/sum(weighted), 1))

# Link to the problem: https://www.hackerrank.com/challenges/s10-weighted-mean/problem?isFullScreen=true/
