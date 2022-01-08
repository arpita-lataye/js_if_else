let a=require('readline-sync');
let ch=a.question('Enter character:');
if (ch=='a'|| ch=='o'|| ch=='i'||ch=='e'|| ch=='u'){
    console.log(ch,'is vowel')
} else if (ch=='A' || ch=='I'|| ch=='O'|| ch=='E'||ch=='U'){
    console.log(ch,'is vowel')
}else {
    console.log(ch,'is consonent')
}