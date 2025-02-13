function processData(input) 
{
    var rows = input.split('\n');
    var max = rows[0].split(' ').map(Number)[1];
    var arr = rows[1].split(' ').map(Number);
    arr = arr.sort(function(a, b){return a-b}); 
    var i = 0;
    
    while (max >= 0) 
    {
        max -= arr[i];
        i++;
    }
    
    console.log(i-1);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let _input = "";

process.stdin.on("data", function (input) 
{
    _input += input;
});

process.stdin.on("end", function () 
{
   processData(_input);
});

// Link to the problem: https://www.hackerrank.com/contests/7days-javascript/challenges/mark-and-toys-2-js-only/
