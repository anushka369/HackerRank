import itertools

# List all possible outcomes (B = Boy, G = Girl)
outcomes = list(itertools.product(['B', 'G'], repeat = 2))

# Filter out cases where at least one child is a boy
valid_cases = [pair for pair in outcomes if 'B' in pair]

# Count cases where both children are boys
both_boys = sum(1 for pair in valid_cases if pair == ('B', 'B'))

# Calculate probability
probability = both_boys / len(valid_cases)

# Display the result
print(f"Probability that both children are boys given at least one is a boy: {probability:.2f}")

# Link to the problem: https://www.hackerrank.com/challenges/s10-mcq-4/problem?isFullScreen=true/
