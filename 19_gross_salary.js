let per=require('readline-sync');
let Basic=per.question('enter basic salary of an employee:')  
if (Basic <= 10000){
    HRA = (Basic * 20) / 100; // or HRA = Basic * (8 / 100)
    DA = (Basic * 80) / 100; // Or Da= Basic * 0.1    	
}else if (Basic <= 20000){
    HRA = (Basic * 25) / 100;
    DA = (Basic * 90) / 100;  	
}else if (Basic >20000){
    HRA = (Basic * 30) / 100; 
    DA = (Basic * 95) / 100;
}
Gross_Salary = Number(Basic) + Number(HRA) +Number(DA);
console.log("Gross Salary of this Employee  = ", Gross_Salary); 
