/* Write a Python program to display the current date and time.Sample Output :
Current date and time
2014-07-05 14:34:14 */

var currentdate = new Date();
var datetime = 'Last Sync: '+currentdate.getDate() + "/" + (currentdate.getMonth()+1 )
+ "/" + currentdate.getFullYear() + " and " 
+ currentdate.getHours() + ":" 
+ currentdate.getMinutes() + ":" + currentdate.getSeconds();
console.log(datetime)
