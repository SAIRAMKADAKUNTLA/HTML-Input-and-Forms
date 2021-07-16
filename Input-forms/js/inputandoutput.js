const salary=document.querySelector('#salary');
const output=document.querySelector('.salary-output');
output.textContent=salary.value;
salary.addEventListener('input',function(){
    output.textContent=salary.value;
});
const text=document.querySelector('#text');
const textError=document.querySelector('.text-error');
text.addEventListener('input',function(){
    let nameregex=RegExp("^[A-Z]{1}[A-Za-z]{2,}$")
    if(nameregex.test(text.value))
    textError.textContent="";
    else textError.textContent="Invalid Name";
});
const email=document.querySelector('#email');
const emailError=document.querySelector('.email-error');
email.addEventListener('input',function(){
let emailregex=RegExp("[A-Za-z0-9]{3,}[.]{1}[A-Za-z0-9]{3,}[@]{1}[A-Za-z]{4,}[.]{1}[a-z]{3,}")
if(emailregex.test(email.value))
emailError.textContent="";
else emailError.textContent="Invalid Email";
})