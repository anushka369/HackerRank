function processData(input) 
{
    console.log(input);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) 
{
    _input += input;
});

process.stdin.on("end", function () 
{
   processData(_input);
});

// Link to the problem: https://www.hackerrank.com/contests/7days-javascript/challenges/print-input-1/
