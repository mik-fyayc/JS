//Напишете програма, която чете цяло число n (3 ≤ n ≤ 100), въведено от потребителя, и печата слънчеви очила
//с размер 5*n x n

function count([num]) {
    let star = Number(num);
    console.log('*'.repeat(star * 2) + ' '.repeat(star) + '*'.repeat(star * 2));
    console.log(' '.repeat(star * 5));

    for (let i = 1; i < star - 1; i++) {
        if ( i === Math.floor((star - 1) / 2)) {
            console.log('*' + '/'.repeat(star * 2 - 2) + '*' + '|'.repeat(star) + '*' + '/'.repeat(star * 2 - 2) + '*');
        }else{
            console.log('*' + '/'.repeat(star * 2 - 2) + '*' + ' '.repeat(star) + '*' + '/'.repeat(star * 2 - 2) + '*');
        }
    }
    console.log('*'.repeat(star * 2) + ' '.repeat(star) + '*'.repeat(star * 2));
}

count(['3']);