var subject= require('readline-sync');
var phy=subject.question('enter physics marks:');
var chem=subject.question('enter chemistry marks:');
var bio=subject.question('enter biology marks:');
var maths=subject.question('enter mathmatics marks:');
var computer=subject.question('enter computer marks:');
var sum=Number(phy)+Number(chem)+Number(bio)+Number(maths)+Number(computer);
// console.log(sum)
var total = 500; 
var percentage=sum*100/total; 
console.log(percentage)
if(percentage>=90){
    console.log('Grade A')
}else if (percentage>=80){
    console.log("Grade B")
}else if (percentage>=70){
    console.log('Grade C')
}else if (percentage>=60){
    console.log('Grade D')
}else if (percentage>=50){
    console.log('Grade E')
}else if (percentage>=40){
    console.log('Grade F')
}else{
    console.log('Grade G')
}
