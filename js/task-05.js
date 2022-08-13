const lineInput = document.querySelector('#name-input');
console.log(lineInput);
const textFromInput = document.querySelector('#name-output');
console.log(textFromInput);

lineInput.setAttribute('placeholder', 'Anonomus');
console.log(lineInput);

lineInput.addEventListener('keyup', outOnText);

function outOnText() {
    event.preventDefault();
    textFromInput.textContent = lineInput.value;
    console.log(textFromInput);
    
}
