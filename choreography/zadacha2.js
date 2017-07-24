function calc([numSteps, numDancers, daysToStudy]) {
    let daySteps = Math.ceil((numSteps / daysToStudy) / numSteps * 100);
    let eachDancer = (daySteps / numDancers).toFixed(2);

    if( daySteps <= 13) {
        console.log(`Yes, they will succeed in that goal! ${eachDancer}%.`);
    }else {
        console.log(`No, They will not succeed in that goal! Required ${eachDancer}% steps to be learned per day.
`);
    }
}

calc([55555,
    30,
    7]);