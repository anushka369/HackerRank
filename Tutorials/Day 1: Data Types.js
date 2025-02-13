process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) 
{
    input_stdin += data;
});

process.stdin.on('end', function () 
{
    input_stdin_array = input_stdin.split("\n");
    main();    
});

// Reads complete line from STDIN
function readLine() 
{
    return input_stdin_array[input_currentline++];
}

function main() 
{
    var i = 4
    var d = 4.0
    var s = "HackerRank "
  
    // Declare second integer, double, and String variables.
    var secondInteger = parseInt(readLine()); // Read and save an integer
    var secondDouble = parseFloat(readLine()); // Read and save a double
    var secondString = readLine(); // Read and save a String

    // Print the sum of both integer variables on a new line.
    console.log(i + secondInteger);

    // Print the sum of the double variables on a new line.
    console.log((d + secondDouble).toFixed(1)); // Format to one decimal place

    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
    console.log(s + secondString);
}

// Link to the problem: https://www.hackerrank.com/challenges/30-data-types/problem?isFullScreen=true
