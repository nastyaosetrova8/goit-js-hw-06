const counter = document.querySelector('#counter')
const btnDec = counter.firstElementChild;
const btnInc = counter.lastElementChild;
let value = document.querySelector('#value');
let counterValue = 0;

btnDec.addEventListener('click', onClickDec);
btnInc.addEventListener('click', onClickInc);

function onClickDec(){
    
    counterValue -= 1;
    value.textContent = counterValue;
    };

function onClickInc(){
    
    counterValue += 1;
    value.textContent = counterValue;
    };