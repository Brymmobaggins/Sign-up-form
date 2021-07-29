const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();

});
// function to check input
function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === "") {                    // username value
        setErrorFor(username, "username cannot be blank")
    } else {
        setSuccessFor(username)
    }
    if (emailValue === "") {                     // email value
        setErrorFor(email, 'email cannot be blank')
    } else {
        setSuccessFor(email)
    }
    if (passwordValue === "") {                 //  password value
        setErrorFor(password, 'password cannot be blank')
    } else if
        (passwordValue.length <= 7) {                 //  password length 
        setErrorFor(password, 'password is too short')
    } else {
        setSuccessFor(password)
    }
    if (password2Value === "") {                       //  password check & validation
        setErrorFor(password2, "password cannot be blank")
    } else if (passwordValue !== password2Value) {        // password matches
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
