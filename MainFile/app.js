const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu ')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// Navbar cursor tracker for Sign up and Sign in button.

const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover", (event)=>{
    const x = (event.pageX - btnEl.offsetLeft);
    const y = (event.pageY - btnEl.offsetTop);

    btnEl.style.setProperty("--xPos", x + "px");
    btnEl.style.setProperty("--yPos", y + "px");
});

const btn2El = document.querySelector(".btn2");

btn2El.addEventListener("mouseover", (event)=>{
    const x = (event.pageX - btn2El.offsetLeft);
    const y = (event.pageY - btn2El.offsetTop);

    btn2El.style.setProperty("--xPos", x + "px");
    btn2El.style.setProperty("--yPos", y + "px");
});


