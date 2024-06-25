// const contasSelect = document.getElementById('contasSelect');
// const contaCard = document.getElementById('contaCard');

// async function getContasBancaria() {
//     const contas = await fetchJson('contas');

//     contas.forEach(item => {
//         const option = document.createElement('option');
//         option.value = item.id;
//         option.textContent = `${item.banco} - Agência: ${item.agencia} - Conta: ${item.conta}-${item.digitoConta}`;
//         contasSelect.appendChild(option);
//     });

//     const conta = localStorage.getItem('conta');
//     if (conta) {
//         const local = JSON.parse(conta);
//         contasSelect.value = local[0].id;
//         setConta(local[0].id);
//     }
// }

// async function setConta(event) {
//     if (contasSelect.selectedIndex === 0) {
//         localStorage.removeItem('conta');
//         contaCard.style.display = "none";
//     } else {
//         const contas = await fetchJson('contas');
//         const id = typeof event === "string" ? event : event.target.value;
//         const conta = contas.filter((item) => { return item.id === id; });

//         localStorage.setItem('conta', JSON.stringify(conta));

//         contaCard.style.display = "flex";
//         contaCard.innerHTML = `
//             <p>${conta[0].value} - ${conta[0].banco} </p>
//             <p>Agência: ${conta[0].agencia} - Conta: ${conta[0].conta}-${conta[0].digitoConta} ${conta[0].codigoOperacao ? '- Operacao: ' + conta[0].codigoOperacao : ''}</p>
//             <p>Dia de diaPagamento: ${conta[0].diaPagamento}</p>
//         `;
//     }

//     clearCartao();
// }

// function clearCartao() {
//     localStorage.removeItem('cartao');
//     cartoesSelect.selectedIndex = 0;
//     cartaoCard.style.display = "none";
// }

// contasSelect.addEventListener('change', setConta);