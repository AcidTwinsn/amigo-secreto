let amigos = [];
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.toUpperCase().trim();
    // validar que el campo no este vacio 

    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    if (!validaNombre(nombreAmigo)) {
        alert('Por favor, ingresa un nombre válido (solo letras y espacios).');
        return;
    }
    // validar que el nombre no este duplicado
    if (amigos.includes(nombreAmigo)) {//compruebe si el nombre ya existe en el array 'amigos'
        alert(`El nombre "${nombreAmigo}" ya esta en la lista de amigos`);//muestra una alerta indicando que el nombre esta duplicado
        return;

    }
    //agregar el nombre a la lista 
    amigos.push(nombreAmigo);

    //Limpiar el campo de entrada para que este vacio
    inputAmigo.value = "";

    //actualizar la lista en el HTML
    actualizarLista();

}
function validaNombre(nombreAmigo) {
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]{2,30}$/;

    return (regex.test(nombreAmigo));

}


function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');

    //Limpiar el contenido actual de la lista y borra cualquier contenido previo
    listaAmigos.innerHTML = "";

    //Recorrer la lista con un ciclo for 
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    // validar que haya amigos disponibles 
    if (amigos.length <= 1) { // comprueba si la lista esta vacia
        alert("No hay amigos disponibles para sortear. Agrega al menos dos.");
        return;
    }
    //genera un indice aleatorio 
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    //obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    //Mostrar el resultado en el HTML
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}
