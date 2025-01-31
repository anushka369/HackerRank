const button = document.createElement('button');

button.id = 'btn';
button.innerHTML = '0';

button.style.width = '96px';
button.style.height = '48px';
button.style.fontSize = '24px';

button.addEventListener('click', function() 
{
    button.innerHTML = parseInt(button.innerHTML) + 1;
});

document.body.appendChild(button);

// Link to the problem: https://www.hackerrank.com/challenges/js10-create-a-button?isFullScreen=true&hr_b=1/
