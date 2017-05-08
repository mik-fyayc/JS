//Land surveyors use grads (also known as gon, 400 grads in a full turn) in their documents. Grads are rather unwieldy
//though, so you need to write a JS function that converts from grads to degrees. In addition, your program needs to
//constrain the results within the range , so if you arrive at a value like -15°, it needs to be converted to 345° and 420°
//becomes 60°.
//The input comes as an array of one string element that needs to be parsed as a number.
//The output should be printed to the console.

function name(array) {
   let gradi = Number(array[0]);
   let gradus = 0;
   gradi = gradi % 400;

    if(gradi < 400 && gradi > 0){
        gradus = gradi * 0.9;
    }else if(gradi < 0) {
        gradus = (gradi + 400)  * 0.9;
        Math.abs(gradus);
    }
    console.log(gradus);
}

name(['500']);
