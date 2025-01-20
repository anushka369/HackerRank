import java.util.Scanner;

public class Solution 
{
    public static void main(String[] args) 
    {
        Scanner scan = new Scanner(System.in);
        String str = scan.nextLine();
        scan.close();
        String reversed = new StringBuilder(str).reverse().toString();
        System.out.println(str.equals(reversed) ? "Yes" : "No");
    }
}

// Link to the problem: https://www.hackerrank.com/challenges/java-string-reverse/problem?isFullScreen=true/
