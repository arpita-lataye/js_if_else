// accept the marks of english, math, and science, social studies subject and display the stream allotted according to following 
//  all subjects more than 80 marks- science stream
//  english>80 and math, science above 50- commerce stream
//  english>80 and social studies>80- humanities

let a=require('readline-sync');
let english=a.question('Enter marks of english subject:');
let math=a.question('Enter marks of math subject:');
let science=a.question('Enter marks of science subject:');
let social_studies=a.question('Enter marks of social_studies subject:');

if (english>80 && math>80 && science>80 && social_studies>80){
    console.log('Science Stream')
}else if (english>80 && math>50 && science>50){
    console.log('Commerce Stream')
}else if (english>80 && social_studies>80){
    console.log('Humanities')
}else{
    console.log('sorry you are not get any stream')
}