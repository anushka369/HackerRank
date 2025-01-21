Arrays.sort(s, new Comparator<String>() 
{
    @Override
    public int compare(String a, String b) 
    {
        if (a == null)
        {
            return 1;
        }
        
        if (b == null)
        {
                return -1;
        }
        return new BigDecimal(b).compareTo(new BigDecimal(a));
    }
});

// Link to the problem: https://www.hackerrank.com/challenges/java-bigdecimal/problem?isFullScreen=true/
