var d=require('readline-sync');
var day=d.question('Enter a day:');

if (day == "monday") {
  console.log("Dhanwantari\nSiddhi\nKritika\nSalon\nMayuri\nGauri");
}
else if (day == "tuesday") {
  console.log("Keemaya\nRoshni\nPooja\nPriyanka\nnalini\nManisha");
}
else if (day == "wednesday") {
  console.log("Shrusti\nKaruna\nParveen\nSandhya\nLeena\nKarishma");
}
else if (day == "thursday") {
  console.log("Nikita\nMona\nPriyanka\nTejashree\nLovely\nMehzebin");
}
else if (day == "friday") {
  console.log("Pihu\nSejal\nChaya\nShrestha\nMonali\nAardhangya");
}
else if (day == "saturday") {
  console.log("Gunjan\nShweta\nRani\nIsha\nKusu\nMadhu");
}
else if (day == "sunday") {
  console.log("Swati\nKhusboo\nidhi\Preeti\nDipti\nAnamika");
}
else {
  console.log("Please enter valid week day")
}