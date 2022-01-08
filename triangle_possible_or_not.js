// accept three sides of triangle and check whether the triangle is possible or not.

/* triangle is possible only when sum of any two sides is greater than third side */

let s=require('readline-sync');
let sideA=s.question('enter first side of triangle:');
let sideB=s.question('enter second side of triangle:');
let sideC=s.question('enter third side of triangle:');
if ((Number(sideA)+Number(sideB))>sideC && (Number(sideB)+Number(sideC))>sideA && (Number(sideA)+Number(sideC))>sideB){
    console.log('Triangle is possible')
}else{
    console.log('Triangle not possible')
}