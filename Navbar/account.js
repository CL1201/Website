
// Sign In animation
const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');

registerLink.onclick = () => {
    wrapper.classList.add('active');
}

loginLink.onclick = () => {
    wrapper.classList.remove('active');
}

// User Infomation

let newuser = 'register_user';
let newuseremail = 'register_email';
let newuserpassword = 'register_password';


