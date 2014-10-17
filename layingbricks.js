function bricksLay (small, large, total_length){

var totalSmall = small*1;
var totalLarge = large*5;
var sum = totalSmall + totalLarge;

 if (sum >= total_length){
      return "all covered";
 } else {
     return "need more";
 }
}
console.log (bricksLay(3,2,15))