function displayInformation(library) 
{
    for (let book of library)
    {
        if (book.readingStatus === true)
        {
            console.log(`Already read '${book.title}' by ${book.author}.`);
        }
        else
        {
            console.log(`You still need to read '${book.title}' by ${book.author}.`);
        }
    }
} 

var library = 
[ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
];

displayInformation(library);

// Link to the problem: https://www.hackerrank.com/contests/7days-javascript/challenges/display-infromation-from-an-object/
