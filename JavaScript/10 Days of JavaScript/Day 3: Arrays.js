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

function getSecondLargest(nums) 
{
    const uniqueNums = new Set(nums);    
    const sortedUniqueNums = Array.from(uniqueNums).sort((a, b) => b - a);    
    return sortedUniqueNums[1];
}

function main() 
{
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);    
    console.log(getSecondLargest(nums));
}

// Link to the problem: https://www.hackerrank.com/challenges/js10-arrays/problem?isFullScreen=true/
