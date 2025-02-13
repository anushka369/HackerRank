function sortLibrary() 
{  
    libraryLength = library.length;

    if (libraryLength <= 1) 
    {
        return library;
    }
    
    sorted = false;

    while (!sorted) 
    {
        sorted = true;

        for (var i = 0; i < libraryLength-1; i++) 
        {
            if (library[i].title > library[i+1].title) 
            {
                tmp = library[i];
                library[i] = library[i+1];
                library[i+1] = tmp;
                sorted = false;
            }
        }
    }
    
    console.log("[ { author: '"+library[0].author+"',\n    title: '"+library[0].title+"',\n    libraryID: "+library[0].libraryID+" },");
    console.log("  { author: '"+library[1].author+"',\n    title: '"+library[1].title+"',\n    libraryID: "+library[1].libraryID+" },");
    console.log("  { author: '"+library[2].author+"',\n    title: '"+library[2].title+"',\n    libraryID: "+library[2].libraryID+" } ]");
}

// tail starts here
var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        libraryID: 1254
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        libraryID: 4264
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        libraryID: 3245
    }
];

sortLibrary();

// Link to the problem: https://www.hackerrank.com/contests/7days-javascript/challenges/sort-array-of-objects/
