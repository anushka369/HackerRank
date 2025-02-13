'use strict'
for (let s of my_array)
{
    if (s === s.split('').reverse().join('')) 
    {
        console.log(s);
    }
}

// Link to the problem: https://www.hackerrank.com/contests/7days-javascript/challenges/js-for-of/
