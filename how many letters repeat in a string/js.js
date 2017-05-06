function sum(array) {
    let word = array[0];
    let letter = array[1];
    let numOfLetters = 0;

    for (let i = 0; i < word.length; i++) {
        if(word[i] == letter){
            numOfLetters++;
        }
    }
    console.log(numOfLetters);
}

sum(["hello","l"]);