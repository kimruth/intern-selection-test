var count = 0;
function createCouter() {
    setInterval(function() {
        count++;
        console.log(count)
    }, 1000)
}

createCouter();
setTimeout(function(){
    console.log(count);
}, 5000)


// 1. the output after 5 seconds will be undefined.
/** 2. count n'a pas ete defini de facon global dans le code, 
 alors il n'est pas accessible dans le setTimeout, 
 et il n'est pas accessible dans le setInterval car il est declare dans une fonction, 
 donc undefined.
*/