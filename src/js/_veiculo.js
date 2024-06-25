// const veiculosSelect = document.getElementById('veiculosSelect');
// const veiculoCard = document.getElementById('veiculoCard');

// async function getVeiculos() {
//     const veiculos = await fetchJson('veiculos');

//     veiculos.forEach(veiculo => {
//         const optionElement = document.createElement('option');
//         optionElement.value = veiculo.id;
//         optionElement.textContent = `${veiculo.marca.nome} ${veiculo.modelo.nome} ${veiculo.anoFabricacao}`;

//         veiculosSelect.appendChild(optionElement);
//     });

//     const veiculo = localStorage.getItem('veiculo');
//     if (veiculo) {
//         const local = JSON.parse(veiculo);
//         veiculosSelect.value = local[0].id;
//         setVeiculo(local[0].id);
//     }
// }

// async function setVeiculo(event) {
//     if (veiculosSelect.selectedIndex === 0) {
//         localStorage.removeItem('veiculo');
//         veiculoCard.style.display = "none";
//     } else {
//         const veiculos = await fetchJson('veiculos');
//         const id = typeof event === "string" ? event : event.target.value;
//         const veiculo = veiculos.filter((item) => { return item.id === id; });

//         localStorage.setItem('veiculo', JSON.stringify(veiculo));

//         veiculoCard.style.display = "flex";
//         veiculoCard.innerHTML = `
//         <p>Marca: ${veiculo[0].marca.nome} - Código: ${veiculo[0].marca.value} </p> 
//         <p>Modelo: ${veiculo[0].modelo.nome} - Código: ${veiculo[0].modelo.value}</p>
//         <p>Ano Fabricação: ${veiculo[0].anoFabricacao}</p>
//         `;
//     }
// }

// veiculosSelect.addEventListener('change', setVeiculo);
// buttonCopyPlaca = addEventListener('click', copyTexto);
// buttonGeneratePlaca.addEventListener('click', getPlacas);

// async function getPlacas() {
//     const letters = 'ABCDEFGHIJ';
//     const firstPart = Array.from({ length: 3 }, () => letters[Math.floor(Math.random() * letters.length)]).join('');
//     const number = Math.floor(Math.random() * 10);
//     const secondPart = String(number);
//     const thirdPart = letters[Math.floor(Math.random() * letters.length)];
//     const lastPart = Array.from({ length: 2 }, () => Math.floor(Math.random() * 10).toString()).join('');
//     const placa = firstPart + secondPart + thirdPart + lastPart;

//     const inputElement = document.getElementById('placasInput');
//     inputElement.value = placa;
// }