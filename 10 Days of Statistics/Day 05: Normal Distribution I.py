# Import library
import math

# Define functions
def cumulative(mean, std, value):
    return 0.5 * (1 + math.erf((value - mean) / (std * (2 ** 0.5))))

# Set data
initial_values = list(map(float, input().split()))
mean = initial_values[0]
std = initial_values[1]
less_period = float(input())
between_period = list(map(float, input().split()))

# Gets the result and show on the screen
print (round(cumulative(mean, std, less_period),3))
print (round(cumulative(mean, std, between_period[1]) - cumulative(mean, std, between_period[0]), 3))

# Link to the problem: https://www.hackerrank.com/challenges/s10-normal-distribution-1/problem?isFullScreen=true/
