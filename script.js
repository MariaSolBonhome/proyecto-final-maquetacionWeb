const menu = document.querySelector('#menu-icon')//Por que query selector y no get element by id? Es un id
const navList = document.querySelector('.navlist')//es un class

menu.onclick = () => {//para que escueh el evento, cuando se hace click.
    menu.classList.toggle('bx-x')
    navList.classList.toggle('open')
}

const sr = ScrollReveal({
    distance: '65px',
    duration: 2000,
    delay: 450,
    reset: true
})

sr.reveal('.hero-text', {delay: 100, origin: 'top'})
sr.reveal('.hero-img', {delay: 350, origin: 'top'})
sr.reveal('.icons', {delay: 400, origin: 'left'})
sr.reveal('.scroll-down', {delay: 350, origin: 'right'})