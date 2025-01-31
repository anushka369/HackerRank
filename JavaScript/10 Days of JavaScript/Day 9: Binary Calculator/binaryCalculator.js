function appendToResult(value) 
{
    const resultDiv = document.getElementById('res');
    resultDiv.innerHTML += value;
}

function clearResult() 
{
    const resultDiv = document.getElementById('res');
    resultDiv.innerHTML = '';
}

function evaluateResult() 
{
    const resultDiv = document.getElementById('res');
    const expression = resultDiv.innerHTML;

    try 
    {
        const parts = expression.split(/([+\-*\/])/);
        const num1 = parseInt(parts[0], 2);
        const operator = parts[1].trim();
        const num2 = parseInt(parts[2], 2);
        let result;

        switch (operator) 
        {
            case '+':
                result = num1 + num2;
                break;

            case '-':
                result = num1 - num2;
                break;

            case '*':
                result = num1 * num2;
                break;

            case '/':
                result = Math.floor(num1 / num2);
                break;

            default:
                throw new Error("Invalid operator");
        }

        resultDiv.innerHTML = result.toString(2) + "eval";
    } 

    catch (error) 
    {
        resultDiv.innerHTML = error.message;
    }
}

// Link to the problem: https://www.hackerrank.com/challenges/js10-binary-calculator?isFullScreen=true&hr_b=1/
