let cart = [];

function addToCart(nombre, precio) {
    const existingProduct = cart.find(product => product.nombre === nombre);
    if (existingProduct) {
        existingProduct.cantidad += 1;
    } else {
        cart.push({ nombre, precio, cantidad: 1 });
    }
    updateCheckoutLink();
}

function updateCheckoutLink() {
    const total = cart.reduce((acc, product) => acc + product.precio * product.cantidad, 0);
    if (total > 0) {
        document.getElementById('checkoutLink').href = 'checkout.html';
        document.getElementById('checkoutLink').style.display = 'inline-block';
    } else {
        document.getElementById('checkoutLink').style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateCheckoutLink();
});