include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
#include <cassert>
using namespace std;

class Student 
{
    private:
        vector <int> scores;

    public:
        void input() 
        {
            for (int i = 0; i < 5; i++) 
            {
                int score;
                cin >> score;
                scores.push_back(score);
            }
        }

        int calculateTotalScore() 
        {
            int total = 0;
            for (int i = 0; i < 5; i++) 
            {
                total += scores[i];
            }
            return total;
        }
};

int main() 
{
    int n;
    cin >> n;
    Student *s = new Student[n];
    
    for(int i = 0; i < n; i++)
    {
        s[i].input();
    }

    int kristen_score = s[0].calculateTotalScore();
    int count = 0; 
    for (int i = 1; i < n; i++)
    {
        int total = s[i].calculateTotalScore();
        if (total > kristen_score)
        {
            count++;
        }
    }
    cout << count;
    return 0;
}

// Link to the problem: https://www.hackerrank.com/challenges/classes-objects/problem?isFullScreen=true/
