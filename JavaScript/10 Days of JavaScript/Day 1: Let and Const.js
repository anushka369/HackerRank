'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => 
{
    inputString += inputStdin;
});

process.stdin.on('end', _ =>
{
    inputString = inputString.trim().split('\n').map(string =>
    {
        return string.trim();
    });
    
    main();    
});

function readLine() 
{
    return inputString[currentLine++];
}

function main() 
{
    const PI = Math.PI;
    const radius = parseFloat(readLine());
    const area = PI * Math.pow(radius, 2);
    const perimeter = 2 * PI * radius;

    console.log(area);
    console.log(perimeter);

    try 
    {    
        PI = 0;
        console.log(PI);
    } 
    
    catch(error) 
    {
        console.error("You correctly declared 'PI' as a constant.");
    }
}

// Link to the problem: https://www.hackerrank.com/challenges/js10-let-and-const/problem?isFullScreen=true/
