/*  Ask a input whether it is raining or not if it is raining then say baarish ho rahi hain, otherwise tu bahar jaake
khel le. */

let a=require('readline-sync')
let season=a.question('Enter season:');
if (season==='rainy'){
    console.log('its raining')
}else{
    console.log('you can play outside ')
}