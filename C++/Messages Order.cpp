#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;

class Message 
{
    private:
        string text;
        static int id;
        int current_id;

    public:
        Message() 
        { 
            current_id = ++id; 
        }

        Message(string t)
        {
            current_id = ++id; 
            text = t; 
        }

        const string& get_text() 
        {
            return text;
        }

        bool operator < (const Message& M2) 
        {
            if (current_id < M2.current_id)
            {
                return true;
            }
              
            else
            {
                return false;
            }
        }
};

int Message::id = 0;

class MessageFactory 
{
    public:
        MessageFactory() {}

        Message create_message(const string& text) 
        {
            Message m = Message(text);
            return m;
        }
};

class Recipient 
{
    public:
        Recipient() {}

        void receive(const Message& msg) 
        {
            messages_.push_back(msg);
        }

        void print_messages() 
        {
            fix_order();
          
            for (auto& msg : messages_) 
            {
                cout << msg.get_text() << endl;
            }
          
            messages_.clear();
        }

    private:
        void fix_order() 
        {
            sort(messages_.begin(), messages_.end());
        }

        vector<Message> messages_;
};

class Network 
{
    public:
        static void send_messages(vector<Message> messages, Recipient& recipient) 
        {
            // simulates the unpredictable network, where sent messages might arrive in unspecified order
            random_shuffle(messages.begin(), messages.end());         
            for (auto msg : messages) 
            {
                recipient.receive(msg);
            }
        }
};

int main() 
{
    MessageFactory message_factory;
    Recipient recipient;
    vector<Message> messages;
    string text;
  
    while (getline(cin, text)) 
    {
        messages.push_back(message_factory.create_message(text));
    }
  
    Network::send_messages(messages, recipient);
    recipient.print_messages();

    return 0;
}

// Link to the problem: https://www.hackerrank.com/challenges/messages-order/problem?isFullScreen=true/
