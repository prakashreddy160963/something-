console.log('javas start execution');
var emailId ='';
var password='';
function login(){
     alert('i am in loggin page');
    emailId=document.getElementById('bhan').value;
    password=document.getElementById('pkra').value;
    if(emailId=='prakash@gmail.com' && password=='123456'){
        document.getElementById('result').innerHTML='you have successfully logged in';
         console.log('you have successfully logged in');
         document.getElementById('result').style.color='green';
         window.location.href="./first.html";
    }
    else{
        document.getElementById('result').innerHTML='your password or emailId is incorrect';
        console.log('your password or emailId is incorrect');
        document.getElementById('result').style.color='red';

    }
    return false;
}