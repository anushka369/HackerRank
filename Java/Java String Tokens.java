import java.util.Scanner;

public class Solution 
{
    public static void main(String[] args) 
    {
        Scanner scan = new Scanner(System.in);
        String s = scan.nextLine();
        scan.close();
        s = removeLeadingNonLetters(s);
      
        if (s.length() == 0) 
        {
            System.out.println(0);
            return;
        }
        
        String[] words = s.split("[^a-zA-Z]+");
        System.out.println(words.length);
      
        for (String word : words) 
        {
            System.out.println(word);
        }
    }

    private static String removeLeadingNonLetters(String str) 
  {
        int i;
        for (i = 0; i < str.length(); i++) 
        {
            if (Character.isLetter(str.charAt(i))) 
            {
                break;
            }
        }
        return str.substring(i);
    }
}

// Link to the problem: https://www.hackerrank.com/challenges/java-string-tokens/problem?isFullScreen=true/
