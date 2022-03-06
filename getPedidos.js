let localPedidos = JSON.parse(localStorage.getItem("pedidos"));
const tablaPedidos = document.getElementById("tabla-pedidos");
let pedidos = `<article>
<h3>Pedido 1</h3>
Nombre:
<p>Carlos Ortega</p>
Teléfono:
<p>7712323221</p>
Email:
<p>carlos.ortega@gmail.com</p>
Descripción general del pastel:
<p>Paste que diga feliz cumpleaños para niño</p>
Sabores:
<p>Vainilla y Fresa</p>
Cubiertas y Decoraciones:
<p>Caramelo suabe y Frutas</p>
</article>
<article>
<h3>Pedido 2</h3>
Nombre:
<p>Carlos Ortega</p>
Teléfono:
<p>7712323221</p>
Email:
<p>carlos.ortega@gmail.com</p>
Descripción general del pastel:
<p>Paste que diga feliz cumpleaños para niño</p>
Sabores:
<p>Vainilla y Fresa</p>
Cubiertas y Decoraciones:
<p>Caramelo suabe y Frutas</p>
</article>
<article>
<h3>Pedido 3</h3>
Nombre:
<p>Carlos Ortega</p>
Teléfono:
<p>7712323221</p>
Email:
<p>carlos.ortega@gmail.com</p>
Descripción general del pastel:
<p>Paste que diga feliz cumpleaños para niño</p>
Sabores:
<p>Vainilla y Fresa</p>
Cubiertas y Decoraciones:
<p>Caramelo suabe y Frutas</p>
</article>
<article>
<h3>Pedido 4</h3>
Nombre:
<p>Carlos Ortega</p>
Teléfono:
<p>7712323221</p>
Email:
<p>carlos.ortega@gmail.com</p>
Descripción general del pastel:
<p>Paste que diga feliz cumpleaños para niño</p>
Sabores:
<p>Vainilla y Fresa</p>
Cubiertas y Decoraciones:
<p>Caramelo suabe y Frutas</p>
</article>
<article>
<h3>Pedido 5</h3>
Nombre:
<p>Carlos Ortega</p>
Teléfono:
<p>7712323221</p>
Email:
<p>carlos.ortega@gmail.com</p>
Descripción general del pastel:
<p>Paste que diga feliz cumpleaños para niño</p>
Sabores:
<p>Vainilla y Fresa</p>
Cubiertas y Decoraciones:
<p>Caramelo suabe y Frutas</p>
</article>`;

if (localPedidos) {
  localPedidos.map((pedido, index) => {
    pedidos += `
    <article>
        <h3>Pedido ${index + 1}</h3>
        Nombre:
        <p>${pedido.name}</p>
        Teléfono:
        <p>${pedido.tel}</p>
        Email:
        <p>${pedido.email}</p>
        Descripción general del pastel:
        <p>${pedido.desc}</p>
        Sabores:
        <p>${pedido.sabores}</p>
        Cubiertas y Decoraciones:
        <p>${pedido.adornos}</p>
    </article>
    `;
  });
}

tablaPedidos.innerHTML = pedidos;
