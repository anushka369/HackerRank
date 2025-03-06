import sympy as sp

# Given regression equations:
# Regression line of y on x:  3x + 4y + 8 = 0
# Regression line of x on y:  4x + 3y + 7 = 0

# Extract slopes
m_yx = -3/4  # Slope of y on x (from 3x + 4y + 8 = 0)
m_xy = -4/3  # Slope of x on y (from 4x + 3y + 7 = 0)

# Compute Pearson correlation coefficient
r = sp.sqrt(m_yx * m_xy)

# The correlation coefficient can be positive or negative
# Since the slopes are negative, we choose r = -sqrt(1) = -1
r_value = -1 if m_yx * m_xy > 0 else 1

print("Pearson correlation coefficient:", r_value)

# Link to the problem: https://www.hackerrank.com/challenges/s10-mcq-7/problem?isFullScreen=true/
