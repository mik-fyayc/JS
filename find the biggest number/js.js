function name(array) {
    let nums = array.map(Number);
    console.log(Math.max.apply(Math, nums));
}

name(['-20','-10','-30','-200']);