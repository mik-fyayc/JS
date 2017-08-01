/*It’s time to put your skills to work for the war effort – creating management software for a radio transmitter factory.
    Radios require a finely tuned quartz crystal in order to operate at the correct frequency. The resource used to
produce them is quartz ore that comes in big chunks and needs to undergo several processes, before it reaches the
desired properties.
    You need to write a JS program that monitors the current thickness of the crystal and recommends the next
procedure that will bring it closer to the desired frequency. To reduce waste and the time it takes to make each
crystal your program needs to complete the process with the least number of operations. Each operation takes the
same amount of time, but since they are done at different parts of the factory, the crystals have to be transported
and thoroughly washed every time an operation different from the previous must be performed, so this must also
be taken into account. When determining the order, always attempt to start from the operation that removes the
largest amount of material.
    The different operations you can perform are the following:
     Cut – cuts the crystal in 4
 Lap – removes 20% of the crystal’s thickness
 Grind – removes 20 microns of thickness
 Etch – removes 2 microns of thickness
 X-ray – increases the thickness of the crystal by 1 micron; this operation can only be done once!
 Transporting and washing – removes any imperfections smaller than 1 micron (round down the
number); do this after every batch of operations that remove material
At the beginning of your program, you will receive a number representing the desired final thickness and a series of
numbers, representing the thickness of crystal ore in microns. Process each chunk and print to the console the order
of operations and number of times they need to be repeated to bring them to the desired thickness.
    The input comes as a numeric array with a variable number of elements. The first number is the target thickness and
all following numbers are the thickness of different chunks of quartz ore.
    The output is the order of operation and how many times they are repeated, every operation on a new line. See the
examples for more information.

 The operation that would remove the most material is always cutting – it removes three quarters of the chunk.
 Starting from 50000, if we perform it twice, we bring the chunk down to 3125. If we cut again, the chunk will be
 781.25, which is less than the desired thickness, so we move to the next operation, but we first round down the
 number (transporting &amp; washing). Next, we lap the chunk – after three operations, the crystal reaches 1600 microns.
 One more lapping would take it to 1280, so we move on to the next operation instead. We do the same check with
 grinding, and finally by etching 2 times, the crystal has reached 1376 microns, which is one more than desired. We
 don’t have an operation which only takes away 1 micron, so instead we etch once more to get to 1374, wash and
 then x-ray to add 1 micron, which brings us to the desired thickness.
*/
function printTriangle(array) {
   let debelina = array[0];
   let cutInt = 0;
   let lapInt = 0;
   let grindInt = 0;
   let etchInt = 0;

    for (let i = 1; i < array.length; i++) {
        console.log('Processing chunk ' + array[i] +' microns');
        let test = array[i];
        if(array[i] / 4 >= debelina ) {
            cut(test);
        }

        if(array[i] * 0.8 >= debelina){
            lap(test);
        }

        if(array[i] - 20 >= debelina) {
            grind(test);
        }

        if(array[i] >= debelina) {
            etch(test);
        }

        if(array[i] + 1 === debelina) {
            array[i] += 1;
            console.log('X-ray x1');
        }

        function cut(test) {
            cutInt++;
            test /=  4;
            if(test / 4 >= debelina ) {
                cut();
            }else {
                Math.floor(test);
                console.log(`Cut x${cutInt}`);
                console.log('Transporting and washing');
            }
        }

        function lap(test) {
            lapInt++;
            test = test * 0.8;
            if(test - (test * 0.2) >= debelina) {
                lap();
            }else {
                Math.floor(test);
                console.log(`Lap x${lapInt}`);
                console.log('Transporting and washing');
            }
        }

        function grind(test) {
            grindInt++;
            test -= 20;
            if(test - 20 >= debelina) {
                grind();
            }else {
                Math.floor(test);
                console.log(`Grind x${grindInt}`);
                console.log('Transporting and washing');
            }
        }

        console.log(`Finished crystal ${debelina} microns`);
    }

    function etch(test) {
        etchInt++;
        test -= 2;

        if(test >= debelina) {
            etch();
        }else {
            Math.floor(test);
            console.log(`Etch x${etchInt}`);
            console.log('Transporting and washing');
        }
    }
}

printTriangle([1000, 4000, 8100]);
