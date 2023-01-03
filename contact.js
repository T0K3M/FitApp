 const contactBtn = document.querySelector('.nav__menu__contact');
 const contactEl = document.querySelector('.contact');
 const contactClose = document.querySelector(".contact__close");
 const main = document.querySelector(".main__container");

function ConClose(){
    contactEl.style.display = 'none';
};

contactBtn.addEventListener('click',() => {
    contactEl.style.display = 'flex';
})
contactClose.addEventListener('click', ConClose);

window.addEventListener('click',e => e.target === contactEl ? ConClose() :false);
