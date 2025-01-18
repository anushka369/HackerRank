private static int B;
private static int H;
private static boolean flag = false;

static 
{
    Scanner stdin = new Scanner(System.in);
    B = stdin.nextInt();
    H = stdin.nextInt();
    flag = B > 0 && H > 0;
    if (!flag) 
    {
        System.out.println("java.lang.Exception: Breadth and height must be positive");
    }
    stdin.close();
    }    

// Link to the problem: https://www.hackerrank.com/challenges/java-static-initializer-block/problem?isFullScreen=true/
