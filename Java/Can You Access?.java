import java.io.*;
import java.lang.reflect.*;
import java.util.*;
import java.util.regex.*;
import java.security.*;

public class Solution 
{
  	public static void main(String[] args) throws Exception 
    {
		    DoNotTerminate.forbidExit();	

		    try
        {
			      BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
			      int num = Integer.parseInt(br.readLine().trim());
			      Object o;
            o = new Inner().new Private();
            System.out.println(num + " is " + ((Solution.Inner.Private)o).powerof2(num));
            System.out.println("An instance of class: " + o.getClass().getCanonicalName() + " has been created");
		    }
		
		    catch (DoNotTerminate.ExitTrappedException e) 
        {
			      System.out.println("Unsuccessful Termination!!");
		    }
	  }
	
    static class Inner
    {
		    private class Private
        {
			      private String powerof2(int num)
            {
				        if ((num & num - 1) == 0)
                {
                    return ("power of 2");
                }

                else
                {
                    return ("not a power of 2");
                }
			      }
		    }
	  }	
}

class DoNotTerminate 
{	 
    public static class ExitTrappedException extends SecurityException 
    {
		    private static final long serialVersionUID = 1L;
    }
 
    public static void forbidExit() 
    {
        final SecurityManager securityManager = new SecurityManager() 
        {
            @Override
            public void checkPermission(Permission permission) 
            {
                if (permission.getName().contains("exitVM")) 
                {
                    throw new ExitTrappedException();
                }
            }
        };

        System.setSecurityManager(securityManager);
    }
}	

// Link to the problem: https://www.hackerrank.com/challenges/can-you-access/problem?isFullScreen=true/
