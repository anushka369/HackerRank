import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Solution 
{
    public static void main(String... args) throws IOException 
    {
        MyMath ob = new MyMath();
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine());
        PerformOperation op;
        boolean ret = false;
        String ans = null;
        
        while (T-- > 0) 
        {
            String s = br.readLine().trim();
            StringTokenizer st = new StringTokenizer(s);
            int ch = Integer.parseInt(st.nextToken());
            int num = Integer.parseInt(st.nextToken());
            
            if (ch == 1) 
            {
                op = ob.isOdd();
                ret = ob.checker(op, num);
                if (ret) 
                {
                    ans = "ODD";
                } 
                
                else 
                {
                    ans = "EVEN";
                }
            } 
            
            else if (ch == 2) 
            {
                op = ob.isPrime();
                ret = ob.checker(op, num);
                
                if (ret) 
                {
                    ans = "PRIME";
                } 
                
                else 
                {
                    ans = "COMPOSITE";
                }
            } 
            
            else if (ch == 3) 
            {
                op = ob.isPalindrome();
                ret = ob.checker(op, num);
                
                if (ret) 
                {
                    ans = "PALINDROME";
                } 
                
                else 
                {
                    ans = "NOT PALINDROME";
                }
            }
            
            System.out.println(ans);
        }
    }
}

interface PerformOperation 
{
    boolean check(int a);
}

class MyMath 
{

    public static boolean checker(PerformOperation p, int num) 
    {
        return p.check(num);
    }

    public PerformOperation isOdd() 
    {
        return new PerformOperation() 
        {
            @Override
            public boolean check(int a) 
            {
                return a % 2 != 0;
            }
        };
    }

    public PerformOperation isPrime() 
    {
        return new PerformOperation() 
        {
            @Override
            public boolean check(int val) 
            {
                if (val < 2)
                {
                    return false;
                }

                for (int i = 2, sqrt = (int)Math.sqrt(val); i <= sqrt; i++) 
                {
                    if (val % i == 0) 
                    {
                        return false;
                    }
                }

                return true;
            }
        };
    }

    public PerformOperation isPalindrome() 
    {
        return new PerformOperation() 
        {
            @Override
            public boolean check(int a) 
            {
                String original = Integer.toString(a);
                String reversed = new StringBuilder(original).reverse().toString();
                return original.equals(reversed);
            }
        };
    }
}

// Link to the problem: https://www.hackerrank.com/challenges/java-lambda-expressions/problem?isFullScreen=true/
