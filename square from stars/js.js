function christmasTree([arg1]) {
    let n = Number(arg1);
    console.log('*'.repeat(n));
    for (let i = 0; i < n - 2; i++) {
        console.log('*'.repeat(1) + ' '.repeat(n - 2) + '*'.repeat(1) );
    }
    console.log('*'.repeat(n));
}

christmasTree([4]);