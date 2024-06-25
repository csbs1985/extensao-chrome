// const planosSelect = document.getElementById('planosSelect');
// const planosCard = document.getElementById('planosCard');
// const contaBox = document.getElementById('contaBox');
// const recargaBox = document.getElementById('recargaBox');

// async function getPlanos() {
//     const planos = await fetchJson('planos');

//     planos.forEach(plano => {
//         plano.planos.forEach(item => {
//             const optionElement = document.createElement('option');
//             optionElement.value = item.oferta;
//             optionElement.textContent = `${item.nome} - ${item.tipoPagamento} - R$ ${item.preco}`;

//             planosSelect.appendChild(optionElement);
//         })
//     });

//     const plano = localStorage.getItem('plano');
//     if (plano) {
//         const local = JSON.parse(plano);
//         planosSelect.value = local[0].oferta;
//         setPlano(local[0].oferta);
//     }
// }

// async function setPlano(event) {
//     if (planosSelect.selectedIndex === 0) {
//         localStorage.removeItem('plano');
//         planosCard.style.display = "none";
//     } else {
//         const planos = await fetchJson('planos');
//         const oferta = typeof event === "number" ? event.toString() : event.target.value;
//         let plano = [];

//         for (const item of planos) {
//             for (const subPlano of item.planos) {
//                 if (subPlano.oferta.toString() === oferta) {
//                     plano.push(subPlano);
//                 }
//             }
//         }

//         localStorage.setItem('plano', JSON.stringify(plano));

//         planosCard.style.display = "flex";
//         planosCard.innerHTML = `
//         <p>Plano ${plano[0].nome}</p>
//         <p>Código: ${plano[0].oferta} - Tipo de pagamento: ${plano[0].tipoPagamento}</p>
//         <p>R$ ${plano[0].preco}${plano[0].frequencia}</p>
//         `;

//         togglePagamento();
//     }

//     function togglePagamento() {
//         const plano = localStorage.getItem('plano');
//         const tipoPagamento = JSON.parse(plano)[0].tipoPagamento;

//         if (tipoPagamento === "PREPAGO") {
//             contaBox.style.display = 'none';
//             recargaBox.style.display = 'flex';
//             localStorage.removeItem('conta');
//         } else {
//             contaBox.style.display = 'flex';
//             recargaBox.style.display = 'none';
//             localStorage.removeItem('recarga');
//         }
//     }
// }

// planosSelect.addEventListener('change', setPlano);
