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

function readLine() {
    return inputString[currentLine++];
}

function vowelsAndConsonants(s) 
{
    let vowels = [];
    let consonants = [];
    
    for (let char of s) 
    {
        if ('aeiou'.includes(char)) 
        {
            vowels.push(char);
        } 
        
        else 
        {
            consonants.push(char);
        }
    }
    
    for (let vowel of vowels) 
    {
        console.log(vowel);
    }
    
    for (let consonant of consonants) 
    {
        console.log(consonant);
    }
}

function main() 
{
    const s = readLine();    
    vowelsAndConsonants(s);
}

// Link to the problem: https://www.hackerrank.com/challenges/js10-loops/problem?isFullScreen=true/
