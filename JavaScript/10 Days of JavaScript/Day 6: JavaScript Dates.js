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

function getDayName(dateString) 
{
    const [month, day, year] = dateString.split('/').map(Number);
    const date = new Date(year, month - 1, day);    
    const dayIndex = date.getDay();    
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    return dayNames[dayIndex];
}

function main() 
{
    const d = +(readLine());
    
    for (let i = 0; i < d; i++) 
    {
        const date = readLine();        
        console.log(getDayName(date));
    }
}

// Link to the problem: https://www.hackerrank.com/challenges/js10-date/problem?isFullScreen=true/
