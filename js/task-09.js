function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const colorRef = document.querySelector('.color');
const buttonRef = document.querySelector('.change-color');

const changeColor = buttonRef.addEventListener('click', function () {
  const getRandomColor = getRandomHexColor();

  body.style.background = getRandomColor;
  colorRef.textContent = getRandomColor;
});