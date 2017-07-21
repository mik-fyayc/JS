function price([n]) {
    let test = false;
    for (let a = 1; a <= 30; a++) {
        for (let b = 1; b <= 30; b++) {
            for (let c = 1; c <= 30; c++) {

                if (a + b + c === n && a < b && b < c ) {
                    console.log( a + ' + ' + b +' + '+ c + ` = ${n}`);
                    test =true;
                }

                if(a * b * c === n && a > b && b > c) {
                    console.log(a + ' * ' + b + ' * '+ c + ` = ${n}`);
                    test =true;
                }

            }
        }
    }

    if(test == false) {
        console.log('No!');
    }
}

price([93]);