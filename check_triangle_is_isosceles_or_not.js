// Write a python program to check whether the triangle is equilateral, isosceles or scalene triangle.

// note:-
//  an equilateral triangle is a triangle in which all three sides are equal.
//  a scalene triangle is a triangle that has three unequal sides.
//  an isosceles triangle is a triangle with (at least) two equal sides.

let triangle=require('readline-sync');
let side1=triangle.question('enter first side of triangle:');
let side2=triangle.question('enter second side of triangle:');
let side3=triangle.question('enter third side of triangle:');
if (side1==side2 && side2==side3){
    console.log('Equilateral Triangle')
}if ((side1==side2 && side2!=side3)|| (side2==side3 && side2!=side1)||(side1==side3 && side1!=side2)){
    console.log('Isosceles Triangle')
}if (side1!=side2 && side1!=side3 && side2!=side3){
    console.log('Scalen Triangle')
}