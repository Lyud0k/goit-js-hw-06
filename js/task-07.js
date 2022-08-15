const lineInput = document.querySelector('input');
const lineInputNum = lineInput.value;
const textChange = document.querySelector('span');
let mas = [];
lineInput.addEventListener('input', event => {
    event.preventDefault();

    const lineInputNumChange = event.currentTarget.value;
    mas.push(lineInputNumChange);
   let meaningStyle = Number.parseInt(window.getComputedStyle(textChange).fontSize);
    if (mas.slice(-1) > mas.slice(-2)) {
        meaningStyle += 1; 
        console.log(textChange.style.fontSize = `${meaningStyle}px`);
    } else {
        meaningStyle -= 1; 
        console.log(textChange.style.fontSize = `${meaningStyle}px`);
    }
 })


