var list = [1,2,3,4,5,6,7,8,9]

function thesum(a){

    var totalsum = 0
    for (var i = 0; i < 5; i++){
        totalsum = totalsum + a[i];

    } 

return totalsum

}

var realsum = thesum(list);

console.log(realsum);


