#include <math.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

typedef struct Node
{
    struct Node* left;
    struct Node* right;
    int data;
} Node;

Node* newNode(int data)
{
    Node* node = (Node*)malloc(sizeof(Node));
    node -> left = node -> right = NULL;
    node -> data = data;
    return node;
}

void levelOrder(Node* root) 
{
    if (root == NULL) 
    {
        return;
    }

    // Create a queue for level order traversal
    Node** queue = (Node**)malloc(100 * sizeof(Node*)); // Assuming a max size of 100 for simplicity
    int front = 0, rear = 0;

    // Enqueue the root node
    queue[rear++] = root;

    while (front < rear) 
    {
        // Dequeue the front node
        Node* current = queue[front++];
        
        // Print the current node's data
        printf("%d ", current -> data);

        // Enqueue left child
        if (current -> left != NULL) 
        {
            queue[rear++] = current -> left;
        }

        // Enqueue right child
        if (current -> right != NULL) 
        {
            queue[rear++] = current -> right;
        }
    }

    // Free the allocated queue memory
    free(queue);
}

Node* insert(Node* root,int data)
{
    if (root == NULL)
    {
        return newNode(data);
    }
      
    else
    {
        Node* cur;
        if (data <= root -> data)
        {
            cur = insert(root -> left, data);
            root -> left = cur;                
        }
          
        else
        {
            cur = insert(root -> right, data);
            root -> right = cur;
        }        
    }
  
    return root;
}

int main()
{
    Node* root = NULL;
    int T, data;
    scanf("%d", &T);
  
    while(T-- > 0)
    {
        scanf("%d", &data);
        root = insert(root, data);
    }
  
    levelOrder(root);
    return 0;    
}

// Link to the problem: https://www.hackerrank.com/challenges/30-binary-trees/problem?isFullScreen=true/
