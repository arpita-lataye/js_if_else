let a=require('readline-sync')
let isTrue = a.question('Enter condition is True of False:');
if(isTrue==="True"){
  console.log("Output should show")
}
if(isTrue === "False"){
    console.log("Both are same")
}
else {
    console.log("Please run it. if all conditions false")
}
