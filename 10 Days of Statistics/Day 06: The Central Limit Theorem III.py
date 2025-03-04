# Import library
import math

# Set data
n = float(input())
mean = float(input())
std = float(input())
percent_ci = float(input())
value_ci = float(input())

# Formula CI
ci = value_ci * (std / math.sqrt(n))

# Gets the result and show on the screen
print(round(mean - ci, 2))
print(round(mean + ci, 2))

# Link to the problem: https://www.hackerrank.com/challenges/s10-the-central-limit-theorem-3/problem?isFullScreen=true/
