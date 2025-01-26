import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution 
{
    public static void main(String[] args) 
    {
        Scanner in = new Scanner(System.in);
        int arr[][] = new int[6][6];

        for (int arr_i = 0; arr_i < 6; arr_i++) 
        {
            for (int arr_j = 0; arr_j < 6; arr_j++) 
            {
                arr[arr_i][arr_j] = in.nextInt();
            }
        }
        int res = Integer.MIN_VALUE;

        for (int i = 0; i <= 3; i++) 
        {
            for (int j = 0; j <= 3; j++) 
            {
                int sum = arr[j][i] + arr[j][i + 1] + arr[j][i + 2];
                sum += arr[j + 1][i + 1];
                sum += arr[j + 2][i] + arr[j + 2][i + 1] + arr[j + 2][i + 2];
                res = Math.max(res, sum);
            }
        }

        System.out.println(res);
    }
}

// Link to the problem: https://www.hackerrank.com/challenges/java-2d-array/problem?isFullScreen=true/
