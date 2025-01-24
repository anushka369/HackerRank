#include <iostream>
#include <vector>
#include <map>
#include <string>
#include <algorithm>
#include <set>
#include <cassert>
using namespace std;

struct Node
{
    Node* next;
    Node* prev;
    int value;
    int key;
    Node (Node* p, Node* n, int k, int val) : prev(p), next(n), key(k), value(val) {};
    Node (int k, int val) : prev(NULL), next(NULL), key(k), value(val) {};
};

class Cache
{   
    protected: 
        map <int, Node*> mp;
        int cp;
        Node* tail, head;
        virtual void set(int, int) = 0;
        virtual int get(int) = 0;
};

class LRUCache : public Cache 
{
    private:
        int capacity;

    public:
        LRUCache(int cap) 
        {
            cp = cap;
            capacity = cap;
            tail = NULL;
            head = NULL;
        }

        void set(int key, int value) override 
        {
            if (mp.find(key) != mp.end()) 
            {
                Node* node = mp[key];
                node -> value = value;

                if (node -> prev != NULL) 
                {
                    node -> prev -> next = node -> next;

                    if (node -> next != NULL) 
                    {
                        node -> next -> prev = node -> prev;
                    } 
        
                    else 
                    {
                        tail = node -> prev;
                    }

                    node -> prev = NULL;
                    node -> next = head;
                    head -> prev = node;
                    head = node;
               }    
          }    
          
          else 
          {
              Node* node = new Node(NULL, head, key, value);

              if (head != NULL) 
              {
                  head -> prev = node;
              }

              head = node;

              if (tail == NULL) 
              {
                  tail = node;
              }

              if (mp.size() == capacity) 
              {
                  mp.erase(tail -> key);
                  tail = tail -> prev;
                  delete tail -> next;
                  tail -> next = NULL;
              }

              mp[key] = node;
          }
      }

      int get(int key) override 
      {
          if (mp.find(key) != mp.end()) 
          {
              Node* node = mp[key];

              if (node -> prev != NULL) 
              {
                  node -> prev -> next = node -> next;
                  
                  if (node -> next != NULL)
                  {
                    node -> next -> prev = node -> prev;
                  }
                
                  else
                  {
                    tail = node -> prev;
                  }
                  
                  node -> prev = NULL;
                  node -> next = head;
                  head -> prev = node;
                  head = node;
              }
  
              return node -> value;
          }
          return -1;
      }
};

// Link to the problem: https://www.hackerrank.com/challenges/abstract-classes-polymorphism/problem?isFullScreen=true/
