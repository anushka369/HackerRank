function sortLibrary() 
{
    library.sort(function(a,b) {
        return a.title.localeCompare(b.title);
    });
  
    console.log(library);
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
