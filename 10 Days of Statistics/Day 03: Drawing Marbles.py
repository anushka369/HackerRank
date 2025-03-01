def probability_second_blue():
    total_marbles = 7  # 3 red + 4 blue
    red_marbles = 3
    blue_marbles = 4

    # Probability of drawing a red marble first
    prob_first_red = red_marbles / total_marbles

    # Probability of drawing a blue marble second given first was red
    prob_second_blue = blue_marbles / (total_marbles - 1)

    return prob_second_blue

# Compute and display the result
result = probability_second_blue()
print(f"Probability that the second marble is blue given the first was red: {result:.2f} (2/3)")

# Link to the problem: https://www.hackerrank.com/challenges/s10-mcq-6/problem?isFullScreen=true/
