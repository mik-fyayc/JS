function date(array) {
   let year = Number(array[0]);
     if( (year % 4 == 0 && year % 100 != 0) || year % 400 == 0 ) {
         console.log('The year is leap ');
     }else{
         console.log('The year is not leap ');
     }
}

date(['1900']);