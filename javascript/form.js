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
    i.value ? '' : i.parentNode.querySelector('.fa-exclamation-circle').classList.remove('hidden');
    i.value ? '' : i.parentNode.querySelector('.font-body-3').classList.remove('hidden');
  })

    
}





