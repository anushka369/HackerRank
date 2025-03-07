#!/bin/python3

import math
import os
import random
import re
import sys

if __name__ == '__main__':
    n = int(input().strip())
    result = 0
    maximum = 0

    while n > 0:
        if n % 2 == 1:
            result += 1
            
            if result > maximum:
                maximum = result

        else:
            result = 0

        n //= 2
        
    print(maximum)

# Link to the problem: https://www.hackerrank.com/challenges/30-binary-numbers/problem?isFullScreen=true/
