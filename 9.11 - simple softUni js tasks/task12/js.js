function task(arr) {
    let words = [];
  let search = arr[arr.length - 1];
  let nArr = arr.join(' ').split(' ');
  nArr.pop();

    for (let i = 1; i < nArr.length; i++) {
        if(search === nArr[i]) {
            words.push(nArr[i + 1]);
        }
    }

    if(words.length === 0) {
        console.log('None');
    }else {
        console.log(words);
    }
}

task(['3 test', '3 test1', '4 test2', '4 test3', '4 test5', '4']);
task(['3 bla', '3 alb', '2']);
