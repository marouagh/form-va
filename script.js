
const form_validation=Array.from(document.querySelectorAll('#form_validation'))
const name=document.querySelector('.name').value
const adress=document.querySelector('.adress').value
const email=document.querySelector('.email').value
const sub_btn=document.querySelector('#submit')
const password=document.querySelector('.password').value


sub_btn.addEventListener('click', (e)=> {
    let message=[];
    //champs vide
    for(let el of form_validation)
    {
        if(el.value==="")
        {
            message.push('Please complete your '+el.name);
            
        }
       
    }
    if (email.indexOf('@')=== -1 && email.indexOf('.')===-1)
    {
        alert('email incorrect');
    }
    if(password.length <= 3)
    {
        message.push('password must be longer than 3 characters')
    }
    if(password.length >=9)
    {
        message.push('password must be less than 8 characters')
    }
    //message affiché
    if (message.length > 0)
    {
        
        alert(message.join(', '));
        e.preventDefault();
        
        
    }
    
});
email.addEventListener('blur', function(){
    
});

/*

if (name==='')
    {
        message.push('Name is required');
    }
    if (adress==='')
    {
        message.push('Adress is required');
    }
    if (email==='')
    {
        message.push('Email is required');
    }
    if(password.length <= 3)
    {
        message.push('password must be longer than 3 characters')
    }
    if(password.length >=9)
    {
        message.push('password must be less than 8 characters')
    }
    
    if (email.indexOf('@')=== -1 && email.indexOf('.')===-1)
    {
        message.push('email incorrect');
    }
*/

/*const name = document.getElementById('name')
const password = document.getElementById('password')
const form=document.getElementById('form')
const errorElement = document.getElementById('error')
form.addEventListener('submit', (e)=> {
    let message= []
    if(name.value==='' || name.value==null)
    {
        message.push('Name is required')
        
    }
    if(password.value.length <= 6)
    {
        message.push('password must be longer than 6 characters')
    }
    if(password.value.length >=20)
    {
        message.push('password must be less than 20 characters')
    }
    if (message.length > 0)
    {
        alert(message.join(', '))
        e.preventDefault()

    }
});*/