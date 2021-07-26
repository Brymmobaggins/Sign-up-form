const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();

});
function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === "") {                    // for username value
        setErrorFor(username, "username cannot be blank")
    } else {
        setSuccessFor(username)
    }
    if (emailValue === "") {                     // for email value
        setErrorFor(email, 'email cannot be blank')
    } else {
        setSuccessFor(email)
    }
    if (passwordValue === "") {                 // for password value
        setErrorFor(password, 'password cannot be blank')
    } else if
        (passwordValue.length <= 7) {                 // for password length 
        setErrorFor(password, 'password is too short')       
    } else {
        setSuccessFor(password)
    }
    if (password2Value === "") {                       // for password two value confirmation
        setErrorFor(password2, "password cannot be blank")
    } else if (passwordValue !== password2Value) {        // for password comfirmation
        setErrorFor(password2, "password does not match")
    }
}
//  function for error messages
function setErrorFor(input, message) {
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector('small');
    // add error inside the small
    small.innerText = message
    //  add error class 
    formControl.className = 'form-control error';
};
//  function for success messages
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';

};
// function isValidEmail(email) {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase())
// };