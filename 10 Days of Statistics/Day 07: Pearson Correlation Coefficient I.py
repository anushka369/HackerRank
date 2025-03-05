# import libraries
import statistics as st

# define function to Pearson correlation coefficient
def correlation_coefficient(n, dt_x, dt_y):
    mean_x = st.mean(dt_x)
    mean_y = st.mean(dt_y)
    std_x = st.pstdev(dt_x)
    std_y = st.pstdev(dt_y)
    c = 0
    for i in range(n):
        c = c + (dt_x[i] - mean_x) * (dt_y[i] - mean_y)
    return c / (n * std_x * std_y)

# Set data
n = int(float(input()))
data_set_x = list(map(float, input().split()))
data_set_y = list(map(float, input().split()))

# Gets the result and show on the screen
print (round(correlation_coefficient(n, data_set_x, data_set_y), 3))

# Link to the problem: https://www.hackerrank.com/challenges/s10-pearson-correlation-coefficient/problem?isFullScreen=true/
