let a=require('readline-sync');
let city=a.question('Enter name of city:')
if (city==='delhi'){
    console.log('monument of the city is red fort')
}else if(city==='agra'){
    console.log('monument of the city is Taj Mahal')
}else if (city==='jaipur'){
    console.log('monument of the city Jal Mahal')
}else{
    console.log('there is no monument for this city')
}