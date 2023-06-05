const textInput = document.querySelector('#name-input');
const textOutput = textInput.nextElementSibling.firstElementChild;


textInput.addEventListener('input', inputEvent);

function inputEvent(event) { 
    if(!event.currentTarget.value){
        textOutput.textContent = 'Anonymous'; 
    }
    else {
        textOutput.textContent = event.currentTarget.value
    }
};
