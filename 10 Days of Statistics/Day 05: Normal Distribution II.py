# Import library
import math

# Define functions
def cumulative(mean, std, value):
    return 0.5 * (1 + math.erf((value - mean) / (std * (2 ** 0.5))))

# Set data
initial_values = list(map(float, input().split()))
mean = initial_values[0]
std = initial_values[1]
val_first_question = float(input())
val_sec_third_question = float(input())

# Gets the result and show on the screen
print (round(100 - (cumulative(mean, std, val_first_question) * 100), 2))
print (round(100 - (cumulative(mean, std, val_sec_third_question) * 100), 2))
print (round(cumulative(mean, std, val_sec_third_question) * 100, 2))

# Link to the problem: https://www.hackerrank.com/challenges/s10-normal-distribution-2/problem?isFullScreen=true/
