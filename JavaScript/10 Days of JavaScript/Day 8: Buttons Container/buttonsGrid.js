document.addEventListener('DOMContentLoaded', function() 
{
    const btn5 = document.getElementById('btn5');
  
    const buttons = 
    [
        document.getElementById('btn1'),
        document.getElementById('btn2'),
        document.getElementById('btn3'),
        document.getElementById('btn4'),
        document.getElementById('btn6'),
        document.getElementById('btn7'),
        document.getElementById('btn8'),
        document.getElementById('btn9')
    ];

    btn5.addEventListener('click', function() 
    {
        const labels = buttons.map(button => button.innerHTML);        
        const lastLabel = labels.pop();
        labels.unshift(lastLabel);
        
        buttons.forEach((button, index) => 
        {
            button.innerHTML = labels[index];
        });
    });
});

// Link to the problem: https://www.hackerrank.com/challenges/js10-buttons-container?isFullScreen=true&hr_b=1/
