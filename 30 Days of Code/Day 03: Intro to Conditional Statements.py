#!/bin/python3

import math
import os
import random
import re
import sys

if __name__ == '__main__':
    N = int(input().strip())
    if (N % 2 != 0):
        print("Weird")
        
    if (N % 2 == 0 and 2 <= N <= 5):
        print("Not Weird")
        
    if (N % 2 == 0 and 6 <= N <= 20):
        print("Weird")
        
    if (N % 2 == 0 and N > 20):
        print("Not Weird")

# Link to the problem: https://www.hackerrank.com/challenges/30-conditional-statements/problem?isFullScreen=true/
