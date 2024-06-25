// const dispositivosSelect = document.getElementById('dispositivosSelect');
// const dispositivoCurrent = '';

// dispositivosSelect.addEventListener('change', setDispositivo);

// buttonCopyDispositivo.addEventListener('click', function () {
//     copyTexto(dispositivoCurrent);
// });

// async function getDispositivos() {
//     const dispositivos = await fetchJson('dispositivos');

//     dispositivos.forEach(dispositivo => {
//         const optionElement = document.createElement('option');
//         optionElement.value = dispositivo.numero;
//         optionElement.textContent = dispositivo.numero;
//         dispositivosSelect.appendChild(optionElement);
//     });

//     const dispositivo = localStorage.getItem('dispositivo');
//     if (dispositivo) {
//         const dispositivo = getDispositivoStorage();
//         setDispositivo(dispositivo);
//         dispositivoCurrent = dispositivo;
//     }
// }

// async function setDispositivo(event) {
//     if (dispositivosSelect.selectedIndex === 0) {
//         localStorage.removeItem('dispositivo');
//     } else {
//         const dispositivos = await fetchJson('dispositivos');
//         const numero = typeof event === "string" ? event : event.target.value;
//         const dispositivo = dispositivos.filter((item) => { return item.numero === numero; });

//         localStorage.setItem('dispositivo', JSON.stringify(dispositivo));
//     }
// }

// function getDispositivoStorage() {
//     const dispositivo = localStorage.getItem('dispositivo');
//     const local = JSON.parse(dispositivo);
//     return local[0].numero;
// }

