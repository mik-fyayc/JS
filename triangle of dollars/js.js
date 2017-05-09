//Write a JS function that prints a triangle of n lines of “$” characters like shown in the examples.
//The input comes as array of strings. Its first element holds the number n (0 < n < 100).

function name(array) {
    let num = Number(array[0]);
    let dolar = '';
    for (let i = 0; i < num; i++) {
        dolar += '$';
        console.log(dolar);

    }

}

name(['60']);