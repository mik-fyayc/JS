function calc([numDancers, numPts, season, place]) {
    let totalPts = 0;
    if(place === 'Bulgaria') {
        totalPts = numPts * numDancers;
        if( season === 'summer' ) {
            totalPts = totalPts - (totalPts * (5/100));
        }else if(season === 'winter' ) {
            totalPts = totalPts - (totalPts * (8/100));
        }
    }else if(place === 'Abroad') {
        totalPts = numPts * numDancers * 1.5;
        if( season === 'summer' ) {
            totalPts = totalPts - (totalPts * (10/100));
        }else if(season === 'winter' ) {
            totalPts = totalPts - (totalPts * (15/100));
        }
    }

    let donations = (totalPts - (totalPts * (25/100))).toFixed(2);
    let restSumPerDancer = ((totalPts - donations) / numDancers).toFixed(2);

    console.log(`Charity - ${donations}`);
    console.log(`Money per dancer - ${restSumPerDancer}`);
}
calc([1,
    89.5,
    'summer',
    'Abroad'
]);