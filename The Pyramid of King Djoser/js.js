function test(baseWithAndLenghtOfPyramid, incrementHeightOfEachStep) {
    let num = 0;
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let currentLapis = 0;
    let currentMarble = 0;

    for (let i = baseWithAndLenghtOfPyramid; i >= 1; i -= 2) {
        if(i === 1 || i === 2) {
            num++;
            gold += i * i;
        }else{
            num++;
            let size = i * i;
            if(num % 5 === 0 ) {
                currentLapis = (i + i + i + i - 4);
                stone += (size - currentLapis);
                lapisLazuli += currentLapis;
            }else {
                currentMarble = (i + i + i + i - 4);
                stone += (size - currentMarble);
                marble += currentMarble;

            }
        }
    }
    console.log('Stone required: ' + Math.ceil(stone  * incrementHeightOfEachStep));
    console.log('Marble required: ' + Math.ceil(marble * incrementHeightOfEachStep));
    console.log('Lapis Lazuli required: ' + Math.ceil(lapisLazuli * incrementHeightOfEachStep));
    console.log('Gold required: ' + Math.ceil(gold * incrementHeightOfEachStep));
    console.log('Final pyramid height: ' + Math.floor(num * incrementHeightOfEachStep));
}

test(12, 1);