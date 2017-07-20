function cat(array) {
    let letter = '';
    let a = 0;
    let b = 0;
    let c = 0;
    let d = 0;

    for (let i = 1; i <= array.length; i++) {
        if (array[i] % 4 == 0) {
            letter+= 'a ';
            a += 1;
        }else if(array[i] % 4 == 1) {
            letter+= 'b ';
            b += 1;
        }else if(array[i] % 4 == 2) {
            letter+= 'c ';
            c += 1;
        }else if(array[i] % 4 == 3) {
            letter+= 'd ';
            d += 1;
        }
    }

    console.log(letter);
    console.log(`Answer A: ${a}`);
    console.log(`Answer B: ${b}`);
    console.log(`Answer C: ${c}`);
    console.log(`Answer D: ${d}`);
}

cat([10, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);