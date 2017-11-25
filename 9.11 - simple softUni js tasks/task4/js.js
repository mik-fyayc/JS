function task(arr) {
    let count = 0;
    let test = false;

    for(let num of arr) {
        num < 0?count++:count;

        if(num === 0) {
          test = true;
        }
    }

    if(test === true) {
        console.log('positive');
    }else {
        if(count % 2 === 0) {
            console.log('positive');
        }else{
            console.log('negative');
        }
    }
}

task([-2, -3, 1]);