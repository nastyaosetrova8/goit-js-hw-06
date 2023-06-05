const regForm = document.querySelector('.login-form');


regForm.addEventListener('submit', handlerRegForm);

function handlerRegForm(evt){
    evt.preventDefault()

    const {email, password} = evt.currentTarget.elements

    if(email.value === '' || password.value === ''){
        return alert("Please fill in all the fields!")
    }
    else {
     const data = {
        email: email.value,password: password.value,
        }
        
        console.log(data);
       
        evt.currentTarget.reset();
    }
    }

   
    
  