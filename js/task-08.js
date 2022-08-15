const form = document.querySelector('form');

form.addEventListener('submit', forSubmit);

function forSubmit(event) {
    event.preventDefault();

        if (form.email.value === '' && form.password.value === '') {
            alert('Всі поля повинні бути заповнені');
            form.reset();
    }
    
    const formData = new FormData(event.currentTarget);
    console.dir(formData)
    formData.forEach((value, name) => {

        console.log(`${name}:`, value);
        
    })

    // const allEl = event.currentTarget.elements;
    // console.dir(allEl);
    // const mail = allEl.email.value;
    // const pass = allEl.password.value;
    // if (mail === '' && pass === '') {
    //     alert('Всі поля повинні бути заповнені');
    // }
    // form.reset();
    // console.log(`${allEl[0].getAttribute('name')}:`, mail);
    // console.log(`${allEl[1].getAttribute('name')}:`, pass);
    
}
