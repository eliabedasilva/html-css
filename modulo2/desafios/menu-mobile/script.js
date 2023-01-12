var buttonHamburger = document.querySelector('.button-hamburger')
buttonHamburger.addEventListener('click', ()=>{
    var menuMobile = document.querySelector('.mobile')
    menuMobile.classList.toggle('activated')
    buttonHamburger.classList.toggle('activated')
})