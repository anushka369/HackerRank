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

function regexVar() 
{
    const re = /^(Mr\.|Mrs\.|Ms\.|Dr\.|Er\.)[a-zA-Z]+$/;   
    return re;
}

function main() 
{
    const re = regexVar();
    const s = readLine();
    
    console.log(!!s.match(re));
}

// Link to the problem: https://www.hackerrank.com/challenges/js10-regexp-2/problem?isFullScreen=true/
