//Write a JS function that finds the biggest of 3 numbers.
//The input comes as array of strings, where each element holds a number.
//The output is the biggest from the input numbers.

function name(array) {
    let nums = array.map(Number);
    console.log(Math.max.apply(Math, nums));
}

name(['-10','-30','-200']);
