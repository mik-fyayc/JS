function calc([capitalLetter, sm1, sm2, sm3, num]) {
    let letters = ['A', 'B', 'C', 'D', 'E',	'F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let lettersSm = ['a', 'b', 'c', 'd', 'e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let numLetter = 0;
    let lettterSm1 = 0;
    let lettterSm2 = 0;
    let lettterSm3 = 0;
    let finalNum = 0;

    for (let i = 0; i < letters.length; i++) {
        if(capitalLetter === letters[i]){
            numLetter = i + 1;
        }
    }

    for (let i = 0; i < lettersSm.length; i++) {
        if(sm1 === lettersSm[i]){
            lettterSm1 = i + 1;
        }

        if(sm2 === lettersSm[i]){
            lettterSm2 = i + 1;
        }

        if(sm3 === lettersSm[i]){
            lettterSm3 = i + 1;
        }
    }


    for (let k = 0; k < numLetter; k++) {
        for (let z = 0; z < lettterSm1; z++) {
            for (let t = 0; t < lettterSm2; t++) {
                for (let y = 0; y < lettterSm3; y++) {
                    for (let y = 0; y <= num; y++) {
                        finalNum++;
                    }
                }
            }
        }
    }

    console.log(finalNum - 1);
}
calc(['K',
    'a',
    'b',
    'c',
    5]);