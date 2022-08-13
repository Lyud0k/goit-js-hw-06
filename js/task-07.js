const lineInput = document.querySelector('input');
const lineInputNum = lineInput.value;
console.dir(lineInputNum);
const textChange = document.querySelector('span');
console.log(textChange);

lineInput.addEventListener('input', event => {
    event.preventDefault();
    const lineInputNumChange = event.currentTarget.value;
    console.log(lineInputNumChange);
    if (lineInputNum !== lineInputNumChange) {
        console.log(textChange.style.fontSize = '40');
    }
})