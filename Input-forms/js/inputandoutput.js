const salary=document.querySelector('#salary');
const output=document.querySelector('.salary-output');
output.textContent=salary.value;
salary.addEventListener('input',function(){
    output.textContent=salary.value;
});
const text=document.querySelector('#text');
const textError=document.querySelector('.text-error');
text.addEventListener('input',function(){
    let nameregex=RegExp("^[A-Z]{1}[A-Za-z]{2,}")
    if(nameregex.test(text.value))
    textError.textContent="";
    else textError.textContent="Invalid Name";
})