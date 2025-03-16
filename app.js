let amigos = [];
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    // validar que el campo no este vacio 
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
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
       inputAmigo.Value = "";
   
       //actualizar la lista en el HTML
       actualizarLista();
   
}

function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');

    //Limpiar el contenido actual de la lista
    listaAmigos.innerHTML = ""; //Borra cualquier contenido previo 

    //Recorrer la lista con un ciclo for 
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}
