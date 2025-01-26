import java.util.*;
import java.io.*;

class Solution
{
    public static void main(String []argh)
    {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        in.nextLine();       
        HashMap <String, Integer> phonebook = new HashMap <String, Integer> (n);
       
        for (int i = 0; i < n; i++)
        {
            String name = in.nextLine();
            int phone = in.nextInt();
            in.nextLine();          
            phonebook.put(name, phone);
        }
       
        while (in.hasNext())
        {
            String s = in.nextLine();
            Integer phonenumber = phonebook.get(s);
          
            if (phonenumber == null)
            {
                System.out.println("Not found");
            }
         
            else
            {
                System.out.println(s + "=" + Integer.toString(phonenumber));
            }
        }
    }
}

// Link to the problem: https://www.hackerrank.com/challenges/phone-book/problem?isFullScreen=true/
