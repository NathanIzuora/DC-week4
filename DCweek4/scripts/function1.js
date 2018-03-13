var myarray = [1,2,3,4,5,6];

var newarray = myarray.filter(function(element){
    return element % 2 ===0;



});

console.log(newarray);