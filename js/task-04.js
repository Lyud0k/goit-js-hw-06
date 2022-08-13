let numOne = 0;
const minusBtn = document.querySelector('[data-action="decrement"]');
const plusBtn = document.querySelector('[data-action="increment"]');

plusBtn.addEventListener('click', () => {
    const answer = document.querySelector('span');
    numOne += 1;
    answer.textContent = numOne;
    console.log(answer);

});

minusBtn.addEventListener('click', () => {
    const answer = document.querySelector('span');
    numOne -= 1;
    answer.textContent = numOne;
    console.log(answer);

});



