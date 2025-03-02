# Set data
probability = list(map(int, input().split()))
p = probability[0] / probability[1]
q = 1 - p
n = int(input())

# Get Geometric Distribution
result = q ** (n - 1) * p
print(round(result, 3))

# Link to the problem: https://www.hackerrank.com/challenges/s10-geometric-distribution-1/problem?isFullScreen=true/
