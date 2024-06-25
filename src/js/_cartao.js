// const cartoesSelect = document.getElementById('cartoesSelect');
// const cartaoCard = document.getElementById('cartaoCard');

// async function getCartoes() {
//     const cartoes = await fetchJson('cartoes');

//     cartoes.forEach(item => {
//         const optionElement = document.createElement('option');
//         optionElement.value = item.numero;
//         optionElement.textContent = `${item.numero} - ${item.nome} - ${item.mesVecimento}/${item.anoVecimento}`;

//         cartoesSelect.appendChild(optionElement);
//     });

//     const cartao = localStorage.getItem('cartao');
//     if (cartao) {
//         const local = JSON.parse(cartao);
//         cartoesSelect.value = local[0].numero;
//         setCartao(local[0].numero);
//     }
// }

// async function setCartao(event) {
//     if (cartoesSelect.selectedIndex === 0) {
//         localStorage.removeItem('cartao');
//         cartaoCard.style.display = "none";
//     } else {
//         const cartoes = await fetchJson('cartoes');
//         const numero = typeof event === "string" ? event : event.target.value;
//         const cartao = cartoes.filter((item) => { return item.numero === numero; });

//         localStorage.setItem('cartao', JSON.stringify(cartao));

//         cartaoCard.style.display = "flex";
//         cartaoCard.innerHTML = `
//         <p>Cartão: ${cartao[0].numero}</p>
//         <p>Nome: ${cartao[0].nome}</p>
//         <p>Vencimento: ${cartao[0].mesVecimento}/${cartao[0].anoVecimento}</p>
//         `;

//         clearConta();
//     }
// }

// function clearConta() {
//     localStorage.removeItem('conta');
//     contasSelect.selectedIndex = 0;
//     contaCard.style.display = "none";
// }

// cartoesSelect.addEventListener('change', setCartao);