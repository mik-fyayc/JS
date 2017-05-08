//Write a JS function that calculates the distance between the two points in 3D by given coordinates.
//The input comes as an array of strings that need to be parsed as numbers. The first three elements are the x, y and z
//coordinates for the first point and the second set of arguments are the coordinates of the other point.
//The output should be printed to the console.

function name(array) {
   let boss = array.map(Number);
   let x1 = boss[0];
   let y1   = boss[1];
   let z1 = boss[2];
    let x2 = boss[3];
    let y2   = boss[4];
    let z2 = boss[5];

    let distance2 = Math.sqrt(Math.pow(x2 - x1,2) +Math.pow(y2-y1,2)+Math.pow(z2-z1,2));
   console.log(distance2);



}

name(['3.5','0','1','0','2','-1']);