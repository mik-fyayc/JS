//Two objects start from point A and travel in the same direction at constant speeds V 1 and V 2 for a period T. Write a
//JS function that calculates the distance between the two object at the end of the period.
//The input comes as array of strings that need to be parsed as numbers. The first two elements are the speeds to the
//two objects in km/h and the third element is the time in seconds.
//The output should be printed to the console. Calculate the distance in meters.

function name(array) {
   let V1 = array[0] * 1000 / 60 / 60;
   let V2   = array[1] * 1000 / 60 / 60;
   let T = array[2];

   let speed1 = V1 * T;
   let speed2 = V2 *T;

   console.log(Math.abs(speed1 - speed2));


}

name(['5','-5','40']);