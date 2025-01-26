import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution 
{
    public static void main(String[] args) 
    {
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        int[][] arr = new int[n][];

        for (int i = 0; i < n; i++) 
        {
            int d = scan.nextInt();
            arr[i] = new int[d];

            for (int j = 0; j < d; j++)
            {
                arr[i][j] = scan.nextInt();
            }
        }
        int q = scan.nextInt();

        for (int i = 0; i < q; i++) 
        {
            int x = scan.nextInt() - 1;
            int y = scan.nextInt() - 1;

            if (arr.length <= x || arr[x] == null || arr[x].length <= y)
            {
                System.out.println("ERROR!");
            }

            else
            {
                System.out.println(arr[x][y]);
            }
        }
    }
}

// Link to the problem: https://www.hackerrank.com/challenges/java-arraylist/problem?isFullScreen=true/
