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

function factorial(n) 
{
    if (n < 0) 
    {
        return undefined;
    }
    
    let result = 1;
  
    for (let i = 1; i <= n; i++) 
    {
        result *= i;
    }
  
    return result;
}

function main() 
{
    const n = +(readLine());
    console.log(factorial(n));
}

// Link to the problem: https://www.hackerrank.com/challenges/js10-function/problem?isFullScreen=true/
