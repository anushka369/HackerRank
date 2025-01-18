import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution 
{
    public static void main(String[] args) 
    {
        Scanner s = new Scanner(System.in);
        int count = 0;
        while (s.hasNextLine()) 
        {
            count++;
            System.out.println(count + " " + s.nextLine());
        }        
    }
}

// Link to the problem: https://www.hackerrank.com/challenges/java-end-of-file/problem?isFullScreen=true/
