var a,b,sum,sub,mul,div;
a=0;
b=0;
function addition(){
    a= parseInt(document.getElementById('txt1').Value);
    b= parseInt(document.getElementById('txt2').value);
    console.log("the value of a is :" +a);
    console.log("the value of b is :" +b);
    sum=a+b;
    document.getElementById('out').value=sum;
    console.log("the sum of a+b="+sum);
}
function subtraction(){
    a= parseInt(document.getElementById('txt1').Value);
    b= parseInt(document.getElementById('txt2').value);
    console.log("the value of a is :" +a);
    console.log("the value of b is :" +b);
    sub=a-b;
    document.getElementById('out').value=sub;
    console.log('the subtarction of a,b='+sub);
}
function multiplication(){
    a= parseInt(document.getElementById('txt1').Value);
    b= parseInt(document.getElementById('txt2').value);
    console.log("the value of a is :" +a);
    console.log("the value of b is :" +b);
    mul=a*b;
    document.getElementById('out').value=mul;
    console.log("the mul of a&b="+mul);
}
function division(){
    a= parseInt(document.getElementById('txt1').Value);
    b= parseInt(document.getElementById('txt2').value);
    console.log("the value of a is :" +a);
    console.log("the value of b is :" +b);
    div=a/b;
    document.getElementById('out').value=div;
    console.log("the division of a,b="+div);
}