const botaoMenu = document.querySelector('.cabecalho__menu');
const menu = document.querySelector('.menu-lateral')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo')
})

const botaoLink = document.querySelector('.menu-lateral');
const link = document.querySelector('.menu-lateral__link')

botaoLink.addEventListener('click', () => {
    link.classList.toggle('menu-lateral__link--ativo')
})
