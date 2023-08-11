const wrapper= document.querySelector('.wrapper');
const register= document.querySelector('.register');
const login= document.querySelector('.login');
const btn = document.querySelector('.btnlogin');
const iconClose = document.querySelector('.icon-close');

register.onclick = () => {
    wrapper.classList.add('active');
};
login.onclick = () => {
    wrapper.classList.remove('active');
};

btn.onclick = () => {
    wrapper.classList.add('active-popup');
};
iconClose.onclick = () => {
    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('active');
};

