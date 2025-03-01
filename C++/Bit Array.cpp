#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

int main() 
{
    unsigned long long n, s, p, q, v, i;
    unsigned long long r = 0, ans = 0, returned;
    unsigned long long a0 = s, a = s, ap = 0, k = 0, kt = 0;
  
    n = 100000000; s = 1232077670; p = 126810854; q = 1536183938;
    cin >> n >> s >> p >> q;
    v = pow(2, 31);
    
    for (i = 0; i < n; i++)
    {
        a = (a * p + q);
        a = a % v;
       
        if ((a == a0 || a == ap) && i != 0)
        {
            k = i + 1;
            break;
        }
      
        ap = a;
    }
  
    if (i == n)
    {
        k = i;
    }
  
    cout << k << endl;  
    return 0;
}

// Link to the problem: https://www.hackerrank.com/challenges/bitset-1/problem?isFullScreen=true/
