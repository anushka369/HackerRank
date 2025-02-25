#!/bin/python3

import math
import os
import random
import re
import sys

if __name__ == '__main__':
    arr = []
    n = int(input())

    for i in range(n):
        data = str(input()).split(" ")
        name = data[0]
        email = data[1]

        if re.search(".+@gmail\.com$", email):
            arr.append(name)

    arr.sort()

    for name in arr:
        print(name)
      
# Link to the problem: https://www.hackerrank.com/challenges/30-regex-patterns/problem?isFullScreen=true/
