const navbar = document.getElementById('navbar');
const btn = document.getElementById('menu');
const btnMenu = document.getElementsByClassName('btn-menu');

const handlePedido = () => {
    console.log('hola')
}

for(let i = 0; i < btnMenu.length; i++){
    btnMenu[i].addEventListener('click', () => {
        btn.classList.toggle('active');
        navbar.classList.toggle('active');
    })
}

btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    navbar.classList.toggle('active');
})