import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;
import java.security.*;

public class Solution 
{
    public static void main(String[] args) 
    {
        Scanner scanner = new Scanner(System.in);
        String key = scanner.next();
        
        try
        {
            MessageDigest md = MessageDigest.getInstance("SHA-256");
            md.update(key.getBytes());        
            byte [] digest = md.digest();        
            StringBuffer stringbuffer = new StringBuffer();
          
            for (byte b: digest)
            {
                stringbuffer.append(String.format("%02x", b));
            }
        
            System.out.println(stringbuffer.toString());
        }
        
        catch (NoSuchAlgorithmException exception)
        {
            System.out.println(exception);
        }
    }
}

// Link to the problem: https://www.hackerrank.com/challenges/sha-256/problem?isFullScreen=true/
