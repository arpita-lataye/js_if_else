var s=require('readline-sync')
var day=s.questionInt('enter day:')
switch(day){
    case 1:
        console.log('monday')
        break;
    case 2:
        console.log('tuesday')
        break;
    case 3:
        console.log('wensday')
        break;
    case 4:
        console.log('thirsday')
        break;
    case 5:
        console.log('friday')
        break;
    case 6:
        console.log('saturday')
        break;
    case 7:
        console.log('sunday')
        break;
    default:
        console.log('enter valid day')
}