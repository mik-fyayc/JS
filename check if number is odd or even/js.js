function date(array) {
    let num = Number(array[0]);

    if(Number.isInteger(num) && num % 2 == 0) {
        console.log('the number is even');
    }else if(Number.isInteger(num) && num % 2 != 0){
        console.log('the number is odd');
    }else{
        console.log('not a number');
    }
}

date(['pase']);