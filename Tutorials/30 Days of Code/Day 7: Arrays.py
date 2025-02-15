#!/bin/python3

import math
import os
import random
import re
import sys

if __name__ == '__main__':
    N = int(input().strip())
    A = list(map(int, input().rstrip().split()))
    
    for i in range(len(A)-1, -1, -1):
        print(A[i], end = " ")

# Link to the problem: https://www.hackerrank.com/challenges/30-arrays/problem?isFullScreen=true/
