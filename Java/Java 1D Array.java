import java.util.*;

public class Solution 
{
    public static void main(String[] args) 
    { 
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();        
        int [] a = new int[n];

        for (int i = 0; i < n; i++)
        {
            int val = scan.nextInt();
            a[i] = val;
        }
        scan.close();

        for (int i = 0; i < a.length; i++) 
        {
            System.out.println(a[i]);
        }
    }
}

// Link to the problem: https://www.hackerrank.com/challenges/java-1d-array-introduction/problem?isFullScreen=true/
