function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const body = document.querySelector('body');

const colorValue = document.querySelector('.color');

const changeColorBtn = document.querySelector('.change-color');


changeColorBtn.addEventListener('click', handleChangeColor);

function handleChangeColor(){
  const bodyColor = getRandomHexColor();
  body.style.backgroundColor = bodyColor;
  colorValue.textContent = bodyColor;
}

