//hamb
document.querySelector('.fa-bars').onclick=()=>document.querySelector('.hamb').classList.toggle('hidden')

//terms
document.querySelector('#terms').onclick =()=>document.querySelector('.terms').classList.remove('hidden');

//privacy
document.querySelector('#privacy').onclick =()=>document.querySelector('.privacy').classList.remove('hidden');

//modal
document.querySelectorAll('.fa-times').forEach(f=>f.onclick =()=> f.parentNode.parentNode.classList.add('hidden'));
document.querySelectorAll('.close-modal').forEach(f=>f.onclick =()=> f.parentNode.parentNode.classList.add('hidden'));

//form
const form = document.querySelector('form');

let send = false;

form.onsubmit= e =>{
  e.preventDefault();

  let inputFlag = true;

  form.querySelectorAll('input').forEach(i=>{
    i.value.trim() ? i.parentNode.querySelector('.fa-exclamation-circle').classList.add('hidden') : i.parentNode.querySelector('.fa-exclamation-circle').classList.remove('hidden');
    i.value.trim() ? i.parentNode.querySelector('.font-body-3').classList.add('hidden') : i.parentNode.querySelector('.font-body-3').classList.remove('hidden');
    i.value.trim() ? '': inputFlag = false;

  })

  const email= document.getElementById('email');
  const emailValidate = /^\w.*@\w+\.\w/.test(email.value);

  emailValidate == false ? email.parentNode.querySelector('.font-body-3').classList.remove('hidden') : ''; 


  const validateEmail= document.getElementById('validate-mail');

  validateEmail.value == email.value ? '' : document.getElementById('error').classList.remove('hidden');
  
  const password= document.getElementById('password');

  if(password.value.trim()<=7){

    document.getElementById('character').classList.add('error-circle');
    document.getElementById('character-text').classList.add('error-text');
  
  }else{

    document.getElementById('character').classList.add('validate-circle');
    document.getElementById('character-text').classList.add('validate-text');
  }

  const number = document.getElementById('number');
  const numberText = document.getElementById('number-text');

  if (!password.value.match(/[0-9]/)){
    
    number.classList.add('error-circle')
    number.classList.remove('validate-circle');
    numberText.classList.add('error-text');
    numberText.classList.remove('validate-text');
  
  }else if(password.value.match(/^[0-9]/)){

    number.classList.add('validate-circle');
    number.classList.remove('error-circle');
    numberText.classList.add('validate-text');
    numberText.classList.remove('error-text');
  }

  inputFlag == true && emailValidate && email.value && password.value.trim()>7 && password.value.match(/^[0-9]/) ? send = true : send = false;

  send==true &&form.submit();
}





