#include <bits/stdc++.h>
using namespace std;

int main()
{
    try 
    {
        string str;
        cin >> str;

        int num = stoi(str);
        cout << num;
    }
    
    catch (...) 
    {
        cout << "Bad String";
    }
    
    return 0;
}

// Link to the problem: https://www.hackerrank.com/challenges/30-exceptions-string-to-integer/problem?isFullScreen=true/
