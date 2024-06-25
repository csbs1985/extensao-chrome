const usuariosSelect = document.getElementById('usuariosSelect');
const usuarioCard = document.getElementById('usuarioCard');
const usuarioNome = document.getElementById('usuarioNome');
const usuarioCpf = document.getElementById('usuarioCpf');
const usuarioCelular = document.getElementById('usuarioCelular');
const usuarioEmail = document.getElementById('usuarioEmail');

let usuarioCurrent = {};

usuariosSelect.addEventListener('change', setUsuario);
usuarioNome.addEventListener('click', function () { copyTexto(usuarioCurrent.nome) });
usuarioCpf.addEventListener('click', function () { copyTexto(usuarioCurrent.cpf) });
usuarioCelular.addEventListener('click', function () { copyTexto(usuarioCurrent.celular) });
usuarioEmail.addEventListener('click', function () { copyTexto(usuarioCurrent.email) });

async function getUsuarios() {
    const usuarios = await fetchJson('usuarios');

    usuarios.forEach(user => {
        const option = document.createElement('option');
        option.value = user.cpf;
        option.textContent = user.nome;
        usuariosSelect.appendChild(option);
    });

    const usuario = localStorage.getItem('usuario');
    if (usuario) {
        const local = JSON.parse(usuario);
        usuariosSelect.value = local[0].cpf;
        setUsuario(local[0].cpf);
    }
}

async function setUsuario(event) {
    if (usuariosSelect.selectedIndex === 0) {
        localStorage.removeItem('usuario');
        usuarioCard.style.display = "none";
    } else {
        const usuarios = await fetchJson('usuarios');
        const cpf = typeof event === "string" ? event : event.target.value;
        const usuario = usuarios.filter((item) => { return item.cpf === cpf; });

        localStorage.setItem('usuario', JSON.stringify(usuario));

        usuarioCard.style.display = "flex";

        usuarioNome.textContent = usuario[0].nome;
        usuarioCpf.textContent = maskCPF(usuario[0].cpf);
        usuarioCelular.textContent = maskCelular(usuario[0].celular);
        usuarioEmail.textContent = usuario[0].email;

        usuarioCurrent = usuario[0];

        setUsuarioInpout();
        // setUsuarioStorage()
    }
}

function maskCPF(cpf) {
    return cpf.replace(/\D/g, '0').replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

function maskCelular(numero) {
    let numeroLimpo = numero.replace(/\D/g, "");
    return `(${numeroLimpo.slice(0, 2)}) ${numeroLimpo.slice(2, 5)} ${numeroLimpo.slice(5, 8)} ${numeroLimpo.slice(8, 11)}`;
}

async function setUsuarioInpout() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var tab = tabs[0];
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: function () {
                document.getElementById('usuario').value = usuarioCurrent.cpf;
            }
        });
    });
}

function setUsuarioStorage() { }
