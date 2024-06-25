// const redefinirButton = document.getElementById('redefinirButton');

redefinirButton.addEventListener('click', redefinirForm);

async function fetchJson(value) {
    try {
        const urlJson = await fetch(`./assets/mocks/${value}.json`);
        const listJson = await urlJson.json();
        const listUnico = removeDuplicados(listJson[value]);
        return sortAlfabetica(listUnico);
    } catch (error) {
        console.error(`Error fetching data: ${value}`, error);
    }
}

function removeDuplicados(list) {
    return list.filter((value, index, self) => {
        const key = Object.keys(value)[0];
        return self.findIndex(t => t[key] === value[key]) === index;
    });
}

function sortAlfabetica(list) {
    if (list.length === 0) return list;
    const firstKey = Object.keys(list[0])[0];
    return list.sort((a, b) => a[firstKey].localeCompare(b[firstKey]));
}

async function setDispositivo(event) {
    const usuarios = await fetchJson('usuarios');
    const cpf = typeof event === "string" ? event : event.target.value;
    const usuario = usuarios.filter((item) => { return item.cpf === cpf; });

    localStorage.setItem('usuario', JSON.stringify(usuario));

    if (usuario.length > 0) {
        const usuarioCard = document.getElementById('usuarioCard');
        usuarioCard.style.display = "flex";
        usuarioCard.innerHTML = `
            <p>${usuario[0].nome}</p>
            <p>CPF: ${usuario[0].cpf} - Celular: ${usuario[0].celular}</p>
            <p>Email: ${usuario[0].email}</p>
        `;
    } else {
        usuarioCard.style.display = "none";
    }
}

function copyTexto(text) {
    console.log(text);
    navigator.clipboard.writeText(text);
}

function redefinirForm() { }

getUsuarios();
// getDispositivos();
// getPlanos();
// getVeiculos();
// getPlacas();
// getEnderecos();
// getCartoes();
// getContasBancaria();
// getValoresRecarga();