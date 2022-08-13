const lineInput = document.querySelector('input');
// const numLength = Number(lineInput.getAttribute("data-length"));
// const textLength = lineInput.getAttribute('placeholder').length;
// console.log(textLength);
// console.log(lineInput);

// lineInput.addEventListener('blur', () => {
//     textLength === numLength ?
//         lineInput.classList.add('valid');
//         lineInput.classList.remove('invalid') :
//     lineInput.classList.add('invalid');
//     lineInput.classList.remove('valid');
//     console.log(lineInput);

// });

lineInput.addEventListener('blur', evt => {
    if (evt.currentTarget.value.length == lineInput.getAttribute("data-length")) {
        lineInput.classList.add('valid');
        lineInput.classList.remove('invalid');
    } else {
    lineInput.classList.add('invalid');
        lineInput.classList.remove('valid');
    }
    
});

console.log(typeof numLength);
console.log(typeof textLength);

