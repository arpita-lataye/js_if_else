// write a program to get next day of a given date.

let a=require('readline-sync');
let year=a.question('Enter a year:')
let month=a.question('Enter month:')
let day=a.question('Enter a day:')
if (year%400==0 || year%4==0  && year%100!=0){
    if (month===2){
        day1=29
    }else if (month===1 || month===3 || month===5 || month===7 || month===8 || month===10 || month===12){
        day1=31
    }else{
        day1=30
    }
}else{
    if (month===2){
        day1=28
    }else if(month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12) {
        day1=31
    }else{
        day1=30
    }
}if (day==31 && month==12){
    day=1
    month=1
    year=Number(year)+1
}else if (day1-day==0){
    month=Number(month)+1
    day=1
}else{
    day=Number(day)+1
}
console.log('next day is:',year,'-',month,'-',day)