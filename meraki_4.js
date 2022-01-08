//  Please tell output on different value of time variable :

var time = require('readline-sync')
var scedule=time.question('select timing for enquiry:');
if (time >= '5 Am' && time <= '6 Am') {
 console.log("sleep well");
}
else if (time >= '6 Am' && time <= '7 Am') {
 console.log("Morning Exercise");
}
else if(time > '7Am' && time < '9Am'){
 console.log("Break+Breakfast");
}
else if ( time > '9Am' && time < '12.30Pm'){
 console.log("Study");
}else if (time > '12.30 Pm' && time < '2 Pm'){
    console.log("Lunch+Break")
}
else if (time > '2 Pm' && time < '4 Pm'){
    console.log('study time')
}else if (time > '4 Pm' && time < '5 Pm'){
    console.log('cultural activity')
}else if (time > '5 Pm' && time < '5.30 Pm'){
    console.log('Break Time')
}else if (time > '5.30 Pm' && time < '8 Pm'){
    console.log('study time')
}else if(time > '8 Pm' && time < ' 9 Pm'){
    console.log('English activity')
}else{
    console.log('scedule is over')
}
