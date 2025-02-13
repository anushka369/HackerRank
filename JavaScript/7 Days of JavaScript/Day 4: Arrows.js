const my_function = (some_array) => 
{
    return some_array.map((element) => 
    {
        if (element % 2 === 0) 
        {
            return element + 1;
        }
        
        else 
        {
            return element - 1;
        }
    });
};

// Link to the problem: https://www.hackerrank.com/contests/7days-javascript/challenges/arrows/
