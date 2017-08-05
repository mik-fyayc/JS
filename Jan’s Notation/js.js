function test(array) {
    let numArr = [];
    let bool = false;

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            numArr.push(array[i]);
        } else if (array[i] === '+') {
            calc(array[i]);
        } else if (array[i] === '-') {
            calc(array[i]);
        } else if (array[i] === '*') {
            calc(array[i]);
        } else if (array[i] === '/') {
            calc(array[i]);
        }
    }

    function calc(operator) {
        if (numArr.length > 1) {
            let lastNum = 0;
            if (operator === '+') {
                lastNum = numArr[numArr.length - 1] + numArr[numArr.length - 2];
            } else if (operator === '-') {
                lastNum = numArr[numArr.length - 2] - numArr[numArr.length - 1];
            } else if (operator === '*') {
                lastNum = numArr[numArr.length - 1] * numArr[numArr.length - 2];
            } else {
                lastNum = numArr[numArr.length - 2] / numArr[numArr.length - 1];
            }

            numArr.pop();
            numArr.pop();
            numArr.push(lastNum);
        } else {
            bool = true;
        }
    }

    if (numArr.length > 1) {
        console.log('Error: too many operands!');
    } else if (bool === true) {
        console.log('Error: not enough operands!');
    } else {
        console.log(numArr[0]);
    }
}
test([5, 3, 4, '*', '-']);