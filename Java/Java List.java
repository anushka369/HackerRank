import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Solution 
{
    public static void main(String[] args) 
    {
        Scanner scanner = new Scanner(System.in);
        int N = scanner.nextInt();        
        List <Integer> L = new ArrayList <Integer> (N);
        
        for (int i = 0; i < N; i++)
        {
            L.add(scanner.nextInt());
        }
        
        int Q = scanner.nextInt();
        
        for (int i = 0; i < Q; i++)
        {
            String operation = scanner.next();
            
            if (operation.equals("Insert"))
            {
                int index = scanner.nextInt();
                int value = scanner.nextInt();
                L.add(index, value);
            }
            
            else if (operation.equals("Delete"))
            {
                int index = scanner.nextInt();
                L.remove(index);
            }
        }
        
        for (int element: L)            
        {
            System.out.print(element + " ");
        }
    }
}

// Link to the problem: https://www.hackerrank.com/challenges/java-list/problem?isFullScreen=true/
