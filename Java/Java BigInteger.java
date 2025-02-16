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
        BigInteger a = scan.nextBigInteger();
        BigInteger b = scan.nextBigInteger();
        scan.close();

        System.out.println(a.add(b));
        System.out.println(a.multiply(b));
    }
}

// Link to the problem: https://www.hackerrank.com/challenges/java-biginteger/problem?isFullScreen=true/
