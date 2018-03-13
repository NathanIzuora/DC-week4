function beersong(){
for (var i = 99; i >= 1; i--){
    var beer= "beer"
    if(i % 5 ===0 && i % 7 ===0){
        beer = "miller lite";
    }
    else if (i % 7 === 0){
        beer = "Miller"
    }
    else if( i % 5 === 0){

        beer = "lite beer"
    }
    console.log(`${i} Bottles of ${beer} on the wall, take one down, pass it around, ${i-1} bottles of beer on the wall`);

}
}
beersong();
