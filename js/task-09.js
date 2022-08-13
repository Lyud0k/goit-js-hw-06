
const Box = document.querySelector('.widget');
// console.log(Box);

const boxParant = Box.parentNode;

const textColor = document.querySelector('span');

const Btn = document.querySelector('.change-color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Btn.addEventListener('click', () => {
//   boxParant.style.backgroundColor = getRandomHexColor();
//   textColor.textContent = getRandomHexColor();

// });
Btn.addEventListener('click', clickChangeColor);

function clickChangeColor() {
    boxParant.style.backgroundColor = getRandomHexColor();
  textColor.textContent = getRandomHexColor();
}

