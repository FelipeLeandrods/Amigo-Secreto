let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let nome = input.value.trim();

    if (nome === "") {
        alert(" Por favor, digite um nome válido!");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Esse nome já está no sorteio");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = ""; 
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; 
    
    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista está vazia! Adicione amigos antes de sortear.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let nomeSorteado = amigos[indiceSorteado];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>Amigo sorteado: <strong>${nomeSorteado}</strong></li>`;
}