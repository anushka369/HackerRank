import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution 
{

    public static void main(String[] args) 
    {
        Scanner scanner = new Scanner(System.in);
        
        try
        {
            int x = scanner.nextInt();
            int y = scanner.nextInt();
            int z = x / y;
            System.out.println(z);
        }
        
        
        catch (InputMismatchException | ArithmeticException exception)
        {
            
            if ((exception.getClass().getName()).equals("java.util.InputMismatchException"))
            {
                System.out.println("java.util.InputMismatchException"); // not ideal..
            }
            
            else
            {
                System.out.println(exception);
            }
        }
    }
}

// Link to the problem: https://www.hackerrank.com/challenges/java-exception-handling-try-catch/problem?isFullScreen=true/
