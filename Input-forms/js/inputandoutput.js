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
let emailregex=RegExp("^[A-Za-z0-9]{3,}[.]{1}[A-Za-z0-9]{3,}[@]{1}[A-Za-z]{4,}[.]{1}[a-z]{3,}$")
if(emailregex.test(email.value))
emailError.textContent="";
else emailError.textContent="Invalid Email";
});
const number=document.querySelector('#number');
const numberError=document.querySelector('.number-error');
number.addEventListener('input',function(){
    let numberregex=RegExp("[0-9]{2}[ ]{1}[0-9]{10}")
    if(numberregex.test(number.value))
    numberError.textContent="";
    else numberError.textContent="Invalid Number";
});
const password=document.querySelector('#pwd');
const passwordError=document.querySelector('.password-error')
password.addEventListener('input',function(){
    let pwdregex=RegExp("^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{8,}$")
    if(pwdregex.test(password.value))
    passwordError.textContent=""
    else passwordError.textContent="Invalid email"
})