// const enderecosSelect = document.getElementById('enderecosSelect');
// const enderecoCard = document.getElementById('enderecoCard');

// async function getEnderecos() {
//     const list = await fetchJson('enderecos');

//     list.forEach(item => {
//         const optionElement = document.createElement('option');
//         optionElement.value = item.id;
//         optionElement.textContent = `${item.logradouro}, ${item.numero} - ${item.cidade}`;

//         enderecosSelect.appendChild(optionElement);
//     });

//     const endereco = localStorage.getItem('endereco');
//     if (endereco) {
//         const local = JSON.parse(endereco);
//         enderecosSelect.value = local[0].id;
//         setEndereco(local[0].id);
//     }
// }

// async function setEndereco(event) {
//     if (enderecosSelect.selectedIndex === 0) {
//         localStorage.removeItem('endereco');
//         enderecoCard.style.display = "none";
//     } else {
//         const enderecos = await fetchJson('enderecos');
//         const id = typeof event === "string" ? event : event.target.value;
//         const endereco = enderecos.filter((item) => { return item.id === id; });

//         localStorage.setItem('endereco', JSON.stringify(endereco));

//         enderecoCard.style.display = "flex";
//         enderecoCard.innerHTML = `
//         <p>${endereco[0].logradouro}, ${endereco[0].numero}</p>
//         <p>CEP: ${endereco[0].cep} - Bairro: ${endereco[0].bairro}</p>
//         <p>${endereco[0].cidade} - ${endereco[0].estado}</p>
//         `;
//     }
// }

// enderecosSelect.addEventListener('change', setEndereco);