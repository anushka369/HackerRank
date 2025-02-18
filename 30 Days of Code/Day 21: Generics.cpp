#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

// Generic function to print elements of a vector
template <typename T>
void printArray(const vector<T>& arr) 
{
    for (const T& element : arr) 
    {
        cout << element << endl;
    }
}

int main() 
{
    int n;
    
    // Read the number of elements for the first array
    cin >> n;
    vector<int> intArray(n);
  
    for (int i = 0; i < n; i++) 
    {
        cin >> intArray[i];
    }
    
    printArray(intArray); // Print integer array

    // Read the number of elements for the second array
    cin >> n;
    vector<string> stringArray(n);
  
    for (int i = 0; i < n; i++) 
    {
        cin >> stringArray[i];
    }
  
    printArray(stringArray); // Print string array

    return 0;
}

// Link to the problem: https://www.hackerrank.com/challenges/30-generics/problem?isFullScreen=true/
