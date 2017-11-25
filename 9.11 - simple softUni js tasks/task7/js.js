let task = function(command) {
    if(command === 'stop') {
        console.log(" ");
        task = function() {
            console.log(" ");
        }
    }else{
        console.log(command);
    }
};

task(5);
task(3);
task('stop');
task(2);
