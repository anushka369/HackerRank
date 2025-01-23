#include <iostream>
#include <vector>
#include <map>
#include <sstream>
#include <algorithm>
using namespace std;

int main() 
{
    int n, q;
    cin >> n >> q;
    cin.ignore();

    vector <string> hrml;
    vector <string> quer;

    for (int i = 0; i < n; i++) 
    {
        string temp;
        getline(cin, temp);
        hrml.push_back(temp);
    }

    for (int i = 0; i < q; i++) 
    {
        string temp;
        getline(cin, temp);
        quer.push_back(temp);
    }

    map <string, string> m;
    vector <string> tag;

    for (int i = 0; i < n; i++) 
    {
        string temp = hrml[i];
        temp.erase(remove(temp.begin(), temp.end(), '\"'), temp.end());
        temp.erase(remove(temp.begin(), temp.end(), '>'), temp.end());

        if (temp.substr(0, 2) == "</") 
        {
            tag.pop_back();
        } 

        else 
        {
            stringstream ss;
            ss.str("");
            ss << temp;
            string t1, p1, v1;
            char ch;
            ss >> ch >> t1 >> p1 >> ch >> v1;

            string temp1 = "";
            if (tag.size() > 0)
            {
                temp1 = *tag.rbegin();
                temp1 = temp1 + "." + t1;
            } 

            else
            {
                temp1 = t1;
            }

            tag.push_back(temp1);
            m[*tag.rbegin() + "~" + p1] = v1;

            while (ss) 
            {
                ss >> p1 >> ch >> v1;
                m[*tag.rbegin() + "~" + p1] = v1;
            }
        }
    }

    for (int i = 0; i < q; i++) 
    {
        if (m.find(quer[i]) == m.end()) 
        {
            cout << "Not Found!\n";
        }
    
        else 
        {
            cout << m[quer[i]] << endl;
        }
    }

    return 0;
}

// Link to the problem: https://www.hackerrank.com/challenges/attribute-parser/problem?isFullScreen=true/
