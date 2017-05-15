//Write a JS function that outputs a rectangle made of stars with variable size, depending on an input parameter. If
//there is no parameter specified, the rectangle should always be of size 5.
function triangleOfStars(num) {
    if(num == 0 || isNaN(num)) {
        num = 5;
    }
    for (let i = 1; i < num +1; i++) {
        console.log('*'.repeat(num));
    }
}

triangleOfStars();
