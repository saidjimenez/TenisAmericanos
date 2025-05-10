document.addEventListener('DOMContentLoaded', () => {
    const producto = JSON.parse(localStorage.getItem('producto')) || {};
    const total = producto.precio || 0;

    document.getElementById('total').textContent = total.toFixed(2);

    const orderSummary = document.getElementById('orderSummary');
    if (Object.keys(producto).length > 0) {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <h3>${producto.marca} ${producto.modelo}</h3>
            <p>Talla: ${producto.talla}</p>
            <p>Color: ${producto.color || 'N/A'}</p>
            <p>Precio: $${producto.precio.toFixed(2)}</p>
        `;
        orderSummary.appendChild(itemDiv);
    }

    document.getElementById('customerForm').addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const customerData = {};
        formData.forEach((value, key) => {
            customerData[key] = value;
        });

        // Simulamos el envío de datos
        console.log('Datos del cliente:', customerData);
        console.log('Producto seleccionado:', producto);

        alert('Compra finalizada con éxito!');
        localStorage.removeItem('producto');
        window.location.href = 'index.html';
    });
});