
// Sign Up animation
const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');

loginLink.onclick = () => {
    wrapper.classList.add('active');
}

registerLink.onclick = () => {
    wrapper.classList.remove('active');
}

// User Infomation

let newuser = 'register_user';
let newuseremail = 'register_email';
let newuserpassword = 'register_password';


