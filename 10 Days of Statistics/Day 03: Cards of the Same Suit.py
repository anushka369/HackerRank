def probability_same_suit():
    total_cards = 52
    suits = 4
    cards_per_suit = 13
    
    # Probability of picking the first card (any suit)
    prob_first_card = 1
    
    # Probability of picking the second card from the same suit
    prob_second_card = (cards_per_suit - 1) / (total_cards - 1)
    
    # Total probability
    probability = prob_first_card * prob_second_card
    
    return probability

# Compute and display the result
result = probability_same_suit()
print(f"Probability that both cards are of the same suit: {result:.2f} ({12}/51)")

# Link to the problem: https://www.hackerrank.com/challenges/s10-mcq-5/problem?isFullScreen=true/
