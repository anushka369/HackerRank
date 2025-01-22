import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

private static int B;
private static int H;
private static boolean flag = false;

public static void main (String[] args)
{
    Scanner stdin = new Scanner(System.in);
    B = stdin.nextInt();
    H = stdin.nextInt();
    flag = B > 0 && H > 0;
    
    if (flag)
    {
		int area = B*H;
		System.out.print(area);
	}
    
    if (!flag) 
    {
        System.out.println("java.lang.Exception: Breadth and height must be positive");
    }
	
    stdin.close();
}    

// Link to the problem: https://www.hackerrank.com/challenges/java-static-initializer-block/problem?isFullScreen=true/
