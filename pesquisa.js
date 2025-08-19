const searchInput = document.getElementById('pesquisa-input');
const productList = document.getElementById('productList');
const products = productList.getElementsByTagName('li');

searchInput.addEventListener('focus', () => {
    productList.style.display = 'block';
});

searchInput.addEventListener('blur', () => {
    productList.style.display = 'none';
});

productList.addEventListener('mousedown', (e) => {
    e.preventDefault();
});

searchInput.addEventListener('input', function() {
    const filter = this.value.toLowerCase();

    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const productName = product.textContent.toLowerCase();

        if (productName.startsWith(filter)) {
            product.style.display = '';
        } else {
            product.style.display = 'none';
        }
    }
});