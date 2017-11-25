let arr = [];
function task(command, num) {
       if(command === 'remove') {
         if(arr[num] !== 'undefined') {
             arr.splice(num, 1);
         }
       }

       if(command === 'add') {
           arr.push(num);
       }

    console.log(arr);
}

task('add', 3);
task('add', 5);
task('add', 7);
task('remove', 2);
task('add', 6);
