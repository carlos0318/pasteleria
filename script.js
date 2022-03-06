const navbar = document.getElementById("navbar");
const btn = document.getElementById("menu");
const btnMenu = document.getElementsByClassName("btn-menu");

function handlePedido(event) {
  event.preventDefault();
  const sabores = [];
  const adornos = [];
  for (let i = 5; i <= 8; i++) {
    if (event.target[i].checked) {
      sabores.push(event.target[i].value);
    }
  }
  for (let i = 9; i <= 13; i++) {
    if (event.target[i].checked) {
      adornos.push(event.target[i].value);
    }
  }

  let datos = []
  if (localStorage.getItem("pedidos") !== null) {
    let pedidos = JSON.parse(localStorage.getItem("pedidos"));
    datos = [...pedidos];
  }
  datos.push({
    name: event.target[0].value,
    tel: event.target[1].value,
    email: event.target[2].value,
    desc: event.target[3].value,
    sabores: sabores,
    adornos: adornos,
  });

  data = JSON.stringify(datos);
  localStorage.setItem("pedidos", data);
}

for (let i = 0; i < btnMenu.length; i++) {
  btnMenu[i].addEventListener("click", () => {
    btn.classList.toggle("active");
    navbar.classList.toggle("active");
  });
}

btn.addEventListener("click", () => {
  btn.classList.toggle("active");
  navbar.classList.toggle("active");
});
