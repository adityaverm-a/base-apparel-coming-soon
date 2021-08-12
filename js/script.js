const form = document.getElementById('form');
const email = document.getElementById('email');

const showError = () => {
    const formControl = email.parentElement;
    formControl.classList.add('error');

    setTimeout(() => {
        formControl.classList.remove('error');
    }, 3000);
}


const checkEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(email.value.trim() === '') {
        showError();
    } else if(!re.test(email.value.trim())){
        showError();
    } 
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkEmail(email);
})