import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution 
{
    public static void main(String[] args) throws IOException 
    {
        BufferedReader buff = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(buff.readLine().trim());
        for (int i = 1; i <= 10; i++)
        {
            System.out.println(N + " x " + i + " = " + N*i);
        }
        buff.close();
    }
}

// Link to the problem: https://www.hackerrank.com/challenges/java-loops-i/problem?isFullScreen=true/
