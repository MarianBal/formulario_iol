console.log('hello world')



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

form.onsubmit= e =>{
  e.preventDefault();

  form.querySelectorAll('input').forEach(i=>{
    i.value.trim() ? i.parentNode.querySelector('.fa-exclamation-circle').classList.add('hidden') : i.parentNode.querySelector('.fa-exclamation-circle').classList.remove('hidden');
    i.value.trim() ? i.parentNode.querySelector('.font-body-3').classList.add('hidden') : i.parentNode.querySelector('.font-body-3').classList.remove('hidden');
  })

  const email= document.getElementById('email');
  const emailValidate = /^\w.*@\w+\.\w/.test(email.value);

  emailValidate == false ? email.parentNode.querySelector('.font-body-3').classList.remove('hidden') : ''; 

  const validateEmail= document.getElementById('validate-mail');

  validateEmail.value == email.value ? '' : validateEmail.parentNode.querySelector('.font-body-3').classList.remove('hidden'); 
  
  const password= document.getElementById('password');

  if(password.value.trim()<8){

    document.getElementById('character').classList.add('error-circle');
    document.getElementById('character-text').classList.add('error-text');
  
  }else{

    document.getElementById('character').classList.add('validate-circle');
    document.getElementById('character-text').classList.add('validate-text');

  }
  //password.parentNode.parentNode.querySelector('.character').classList.add('.error-text'):password.parentNode.parentNode.querySelector('.character').classList.add('.validate-text');


}





