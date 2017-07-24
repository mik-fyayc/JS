function calc(array) {
    let trainingDays = Number(array[0]);
    let numDancers = Number(array[1]);
    let dancersTotalEnergy = 100 * trainingDays * numDancers;
    let totalEnergy = 0;

    for (let i = 1; i <= trainingDays; i++) {
        if (i % 2 === 0) {
            if(Number(array[1 + i]) % 2 === 0) {
                totalEnergy = totalEnergy + (68 * numDancers );
            }else {
                totalEnergy = totalEnergy + (65 * numDancers );
            }
        } else {
            if(Number(array[1 + i]) % 2 === 0) {
                totalEnergy = totalEnergy + (49 * numDancers );
            }else {
                totalEnergy = totalEnergy + (30 * numDancers );
            }
        }
    }

    let totalEneryAfter = dancersTotalEnergy - totalEnergy;
    let notUsed = (totalEneryAfter / numDancers / trainingDays).toFixed(2);

    if (notUsed >= 50) {
        console.log(`They feel good! Energy left: ${notUsed}`);
    }else {
        console.log(`They are wasted! Energy left: ${notUsed}`);
    }
}

calc([4,
    10,
    5,
    8,
    2,
    3
]);

calc([4,
    10,
    1,
    1,
    1,
    1]);