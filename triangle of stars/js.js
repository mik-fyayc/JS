//Write a JS function that outputs a triangle made of stars with variable size, depending on an input parameter.
function triangleOfStars(num) {
    for (let i = 1; i < num + 1; i++) {
        console.log('*'.repeat(i));
    }
    for (let j = num + 1; j > 0; j--) {
        console.log('*'.repeat(j));
    }
}

triangleOfStars(10);
