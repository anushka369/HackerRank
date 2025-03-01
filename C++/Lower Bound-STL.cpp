#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

int main() 
{
    int n;
    cin >> n;

    vector<int> v(n);
    for (int i = 0; i < n; i++) 
    {
        cin >> v[i];
    }

    int q;
    cin >> q; 

    for (int i = 0; i < q; i++) 
    {
        int x;
        cin >> x; 

        vector<int>::iterator low = lower_bound(v.begin(), v.end(), x);

        if (v[low - v.begin()] == x) 
        {
            cout << "Yes " << (low - v.begin() + 1) << endl; 
        } 
        
        else 
        {
            cout << "No " << (low - v.begin() + 1) << endl; 
        }
    } 
  
    return 0;
}

// Link to the problem: https://www.hackerrank.com/challenges/cpp-lower-bound/problem?isFullScreen=true/
