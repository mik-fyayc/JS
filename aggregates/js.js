//The output should be the printed on the console. Display the sum of all elements in the array, the value of the
//smallest, the value of the biggest, the product of all elements and a string of all elements joined together.

function test(array) {
    let sum = 0;
    let join = '';
    let product = array[0];

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        join += array[i];
    }

    for (let i = 1; i < array.length; i++) {
        product *= array[i];
    }

    array.sort((a,b) => a - b);

    console.log('Sum = ' + sum);
    console.log('Min = ' + array[0]);
    console.log('Max = ' + array[array.length - 1]);
    console.log('Product = ' + product);
    console.log('Join = ' + join);
}

test([2,3,10,5]);


