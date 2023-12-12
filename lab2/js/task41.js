function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function backspace() {
    let currentDisplay = document.getElementById('display').value;
    document.getElementById('display').value = currentDisplay.substring(0, currentDisplay.length - 1);
}

function calculateString(input) {
    // Use regex to find digits, +, -, and decimal points in the input string
    const regex = /(-?\d+(\.\d+)?)|([+-]{2})|([+-])/g;
    const matches = input.match(regex);

    // Initialize variables to keep track of the result and the sign multiplier
    let result = 0;
    let count_c = 0;
    let count_p = 0;
    let check_error = 0;

    // Iterate through the matches
    for (const match of matches) {
        if (match === '++') {
            count_c += 1;
        } else if (match === '--') {
            count_p += 1;
        } else {
            // Convert the matched digit to a number and update the result
            if (check_error === 1) {
                return 'error';
            }
            result += parseFloat(match);
            check_error += 1;
        }
    }
    result += count_c - count_p;
    // Return the result as a string
    return result.toString();
}


function calculate() {
    try {
        let expression = document.getElementById('display').value;
        let tokens = expression.split(' ');
        for (let i = 0; i < tokens.length; i++) {
            if (/\+\+|--|\+\+\d+(\.\d+)?|\d+(\.\d+)?\+\+|--\d+(\.\d+)?|\d+(\.\d+)?--/g.test(tokens[i])) {
                tokens[i] = calculateString(tokens[i]);
            }
        }

        let processedExpression = tokens.join('');
        processedExpression = processedExpression.replace(/\s/g, '')
        document.getElementById('display').value = eval(processedExpression);
    } catch (error) {
        document.getElementById('display').value = 'error';
    }
}

function increment() {
    appendToDisplay('++');
}

function decrement() {
    appendToDisplay('--');
}








