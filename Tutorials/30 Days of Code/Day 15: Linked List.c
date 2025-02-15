#include <stdlib.h>
#include <stdio.h>	

typedef struct Node
{
    int data;
    struct Node* next;
} Node;

Node* insert(Node *head,int data)
{    
    Node* node;
    node = (Node *)malloc(sizeof(Node));
    node -> data = data;
  
    if (head == NULL) 
    {
        head = node; 
        return head;
    }
    
    Node *p;
    p = head;
    
    while (p -> next != NULL)
    {
        p = p -> next;
    }
    
    p -> next = node;
    return head;    
}

void display(Node *head)
{
	  Node *start = head;
  
  	while(start)
  	{
    		printf("%d ", start -> data);
    		start = start -> next;
  	}
}

int main()
{
    int T, data;
    scanf("%d",&T);
    Node *head = NULL;	
  
    while(T-- > 0)
    {
        scanf("%d", &data);
        head = insert(head, data);
    }
    
    display(head);
}

// Link to the problem: https://www.hackerrank.com/challenges/30-linked-list/problem?isFullScreen=true/
