/*Write a Python program which accepts the radius of a circle from the user and computes the area.
Sample Output :
r = 1.1
Area = 3.8013271108436504*/

let a=require("readline-sync");
let radius1=a.question('Enter area of circle:');
let area_of_circle=3.14*2*Number(radius1)
console.log(area_of_circle)