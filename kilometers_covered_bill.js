// accept the kilometers covered and calculate the bill according to the forllowing criteria:
// first 10 km   rs 11/km
// next  90 km   rs 10/km
// after that    rs 9/km


let a=require("readline-sync");
let kilometer_covered=a.question('Enter the kilometer covered:');
if (kilometer_covered<=10){
    amount=Number(kilometer_covered)*11
}else if (kilometer_covered>10 && kilometer_covered<=100){
    amount=Number(kilometer_covered)*10
    // amount=110+(kilometer_covered-10)*10
}else if (kilometer_covered>100){
    amount=Number(kilometer_covered)*9
    // amount=1010+(kilometer_covered-100)*9
}
console.log("total amount to pay is",amount)