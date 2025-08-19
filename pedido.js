document.addEventListener('DOMContentLoaded', () => {
    const filtroInput = document.getElementById('filtro-pedidos-input');
    const filtroBtn = document.querySelector('.filtro-btn');
    const pedidos = document.querySelectorAll('.pedido-card');

    function normalizarTexto(texto) {
        return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    function filtrarPedidos() {
        const termoBusca = normalizarTexto(filtroInput.value.toLowerCase().trim());

        pedidos.forEach(pedido => {
            const nomeProdutoElemento = pedido.querySelector('.pedido-item h4.nome');

            if (nomeProdutoElemento && normalizarTexto(nomeProdutoElemento.textContent.toLowerCase()).includes(termoBusca)) {
                pedido.style.display = 'block';
            } else {
                pedido.style.display = 'none';
            }
        });
    }

    if (filtroInput) {
        filtroInput.addEventListener('input', filtrarPedidos);
    }

    if (filtroBtn) {
        filtroBtn.addEventListener('click', filtrarPedidos);
    }
});