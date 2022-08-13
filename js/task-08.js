const form = document.querySelector('form');
console.log(form);

form.addEventListener('submit', forSubmit);

function forSubmit(event) {
    event.preventDefault();
    
    const allEl = event.currentTarget.elements;
    console.dir(allEl);
    const mail = allEl.email.value;
    const pass = allEl.password.value;
    if (mail === '' && pass === '') {
        alert('Всі поля повинні бути заповнені');
    }
    form.reset();
    console.log(`${allEl[0].getAttribute('name')}:`, mail);
    console.log(`${allEl[1].getAttribute('name')}:`, pass);
    
}
