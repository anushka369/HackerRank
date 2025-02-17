#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the 'solve' function below.

# The function accepts following parameters:
#  1. DOUBLE meal_cost
#  2. INTEGER tip_percent
#  3. INTEGER tax_percent


def solve(meal_cost, tip_percent, tax_percent):
    # Write your code here
    tip = (tip_percent * meal_cost)/100
    tax = (tax_percent * meal_cost)/100
    total_cost = meal_cost + tax + tip
    print(round(total_cost))

if __name__ == '__main__':
    meal_cost = float(input().strip())

    tip_percent = int(input().strip())

    tax_percent = int(input().strip())

    solve(meal_cost, tip_percent, tax_percent)

# Link to the problem: https://www.hackerrank.com/challenges/30-operators/problem?isFullScreen=true/
