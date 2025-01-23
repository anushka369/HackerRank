#include <sstream>
#include <vector>
#include <iostream>
using namespace std;

vector <int> parseInts(string str) 
{
    vector <int> integers;
    stringstream ss(str);
    char ch;
    int num;
    while (ss >> num) 
    {
        integers.push_back(num);
        ss >> ch;
    }
    return integers;
}

int main() 
{
    string str;
    cin >> str;
    vector <int> integers = parseInts(str);
    for (int i = 0; i < integers.size(); i++) 
    {
        cout << integers[i] << "\n";
    }
    return 0;
}

// Link to the problem: https://www.hackerrank.com/challenges/c-tutorial-stringstream/problem?isFullScreen=true/
