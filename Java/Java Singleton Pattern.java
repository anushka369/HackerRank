import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;
import java.lang.reflect.*;

class Singleton
{
    private static final Singleton INSTANCE = new Singleton();
    String str = "Hello I am a singleton! Let me say hello world to you";
    
    private Singleton() {}
    
    public static Singleton getSingleInstance()
    {
        return INSTANCE;
    }
}

// Link to the problem: https://www.hackerrank.com/challenges/java-singleton/problem?isFullScreen=true/
