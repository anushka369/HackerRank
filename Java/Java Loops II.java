import java.util.*;
import java.io.*;

class Solution
{
    public static void main(String []argh)
    {
        int a, b, n;
        Scanner in = new Scanner(System.in);
        int t = in.nextInt();
        
        for(int i = 0; i < t; i++)
        {
            a = in.nextInt();
            b = in.nextInt();
            n = in.nextInt();
            int s = a + b;
            System.out.print(s+" ");
            
            for(int j = 1; j < n; j++)
            {
                s += Math.pow(2, j) * b;
                System.out.print(s+" ");                    
            }
            System.out.println("");
        }
            in.close();
    }
}

// Link to the problem: https://www.hackerrank.com/challenges/java-loops/problem?isFullScreen=true/
