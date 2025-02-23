from math import sqrt

T = int(input())

def isPrime(n):
    for i in range(2, int(sqrt(n) + 1)):
        if n % i is 0:
            return False
    return True

for _ in range(T):
    n = int(input())
    
    if n >= 2 and isPrime(n):
        print("Prime")
      
    else:
        print("Not prime")

# Link to the problem: https://www.hackerrank.com/challenges/30-running-time-and-complexity/problem?isFullScreen=true/
