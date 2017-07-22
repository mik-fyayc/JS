function price(tournament) {
    let stadionCapacityOnePercent = tournament[0] / 100;
    let allFans = tournament[1];
    let fenA = 0;
    let fenB = 0;
    let fenV = 0;
    let fenG = 0;

    for (let i = 2; i < tournament.length; i++) {
        if(tournament[i] === 'A' ) {
            fenA++;
        }else if(tournament[i] === 'B') {
            fenB++;
        }else if(tournament[i] === 'V') {
            fenV++;
        }else if(tournament[i] === 'G') {
            fenG++;
        }
    }

    let FensOnePercent = (fenA + fenB + fenG + fenV) / 100;
    console.log((fenA / FensOnePercent).toFixed(2) + '%' );
    console.log((fenB/ FensOnePercent).toFixed(2) + '%' );
    console.log((fenV / FensOnePercent).toFixed(2) + '%' );
    console.log((fenG / FensOnePercent).toFixed(2) + '%' );
    console.log((allFans / stadionCapacityOnePercent).toFixed(2) + '%');
}

price([76, 10, 'A', 'V', 'V', 'V', 'G', 'B', 'A', 'V', 'B', 'B' ]);