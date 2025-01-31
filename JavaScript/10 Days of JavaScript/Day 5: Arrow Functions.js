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

function modifyArray(nums) 
{
    return nums.map(num => 
    {  
        if (num % 2 === 0)  
        {  
            return num * 2;  
        }

        else  
        {  
            return num * 3;  
        }  
});
}

function main() 
{
    const n = +(readLine());
    const a = readLine().split(' ').map(Number);    
    console.log(modifyArray(a).toString().split(',').join(' '));
}

// Link to the problem: https://www.hackerrank.com/challenges/js10-arrows/problem?isFullScreen=true/
