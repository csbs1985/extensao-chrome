// const racargaSelect = document.getElementById('racargaSelect');

// async function getValoresRecarga() {
//     const recargas = await fetchJson('recargas');

//     recargas.forEach(recarga => {
//         const option = document.createElement('option');
//         option.value = recarga.valor;
//         option.textContent = recarga.texto;
//         racargaSelect.appendChild(option);
//     });

//     const recarga = localStorage.getItem('recarga');
//     if (recarga) {
//         const local = JSON.parse(recarga);
//         racargaSelect.value = local[0].valor;
//         setRecarga(local[0].valor);
//     }
// }

// async function setRecarga(event) {
//     if (racargaSelect.selectedIndex === 0) {
//         localStorage.removeItem('recarga');
//     } else {
//         const recargas = await fetchJson('recargas');
//         const valor = typeof event === "string" ? event : event.target.value;
//         const recarga = recargas.filter((item) => { return item.valor === valor; });

//         localStorage.setItem('recarga', JSON.stringify(recarga));
//     }
// }

// racargaSelect.addEventListener('change', setRecarga);