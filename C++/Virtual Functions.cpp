#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
#define NUM_OF_MARKS 6
using namespace std;

class Person 
{
    public:
        string name;
        int age;

        virtual void getdata()
        {
            cin >> this -> name >> this -> age;
        }

        virtual void putdata() 
        {
            cout << this -> name << " " << this -> age << endl;
        }
};

class Professor : public Person 
{
    public:
        Professor() 
        {
            this->cur_id = ++id;
        }
        
        int publications;
        static int id;
        int cur_id;
    
        void getdata() 
        {
            cin >> this -> name >> this -> age >> this -> publications;
        }

        void putdata() 
        {
            cout << this -> name << " " << this -> age << " " << this -> publications << " " << this -> cur_id << endl;
        }
};

int Professor::id = 0;

class Student : public Person 
{
    public:
        Student() 
        {
            this -> cur_id = ++id;
        }

        int marks[NUM_OF_MARKS];
        static int id;
        int cur_id;

        void getdata() 
        {
            cin >> this -> name >> this -> age;
            for (int i = 0; i < NUM_OF_MARKS; i++) 
            {
                cin >> marks[i];
            }
        }
    
        void putdata() 
        {
            int marksSum = 0;
            for (int i = 0; i < NUM_OF_MARKS; i++) 
            {
                marksSum += marks[i];
            }
        
            cout << this -> name << " " << this -> age << " " << marksSum << " " << this -> cur_id << endl;
        }
};

int Student::id = 0;

int main()
{
    int n, val;
    cin >> n;
    Person *per[n];

    for (int i = 0; i < n; i++)
    {
        cin >> val;
        if (val == 1)
        {
            per[i] = new Professor;
        }
        else 
        {
            per[i] = new Student;
        }

        per[i] -> getdata();
    }

    for (int i = 0; i < n; i++)
    {
        per[i] -> putdata();
    }

    return 0;
}

// Link to the problem: https://www.hackerrank.com/challenges/virtual-functions/problem?isFullScreen=true/
