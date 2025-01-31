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

function sides(literals, ...expressions) 
{
    const area = expressions[0];
    const perimeter = expressions[1];
    const sumOfSides = perimeter / 2;

    const a = 1;
    const b = -sumOfSides;
    const c = area;

    const discriminant = b * b - 4 * a * c;
    const side1 = (sumOfSides + Math.sqrt(discriminant)) / 2;
    const side2 = (sumOfSides - Math.sqrt(discriminant)) / 2;

    return [side1, side2].sort((a, b) => a - b);
}

function main()
{
    let s1 = +(readLine());
    let s2 = +(readLine());
    
    [s1, s2] = [s1, s2].sort();
    
    const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;

    if (s1 === x)  
    {  
        console.log(s1);  
    }  
      
    else  
    {  
        console.log(-1);  
    }  
    
    if (s2 === y)  
    {  
        console.log(s2);  
    }  
      
    else  
    {  
        console.log(-1);  
    }  
}

// Link to the problem: https://www.hackerrank.com/challenges/js10-template-literals/problem?isFullScreen=true/
