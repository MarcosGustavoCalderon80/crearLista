'use strict';

let btnAgregar = document.getElementsByClassName('agregar')[0];
let entradaTexto = document.getElementById('ingresar-texto');
let listarLibrerias = document.getElementsByClassName('lista-tareas')[0];
let btnEliminar = document.getElementById('eliminar');

function estaVacio(categoria) {
    // retorno el valor resultante de esa condición
    return categoria.trim().length == 0;
};

btnAgregar.addEventListener('click', function () {
    let categoria = entradaTexto.value;

    if (!estaVacio(categoria)) {
        // creo un nodo html desde javascript
        let cursoNuevo = document.createElement('li');
        // le agrego como contenido la categoria escrita por el usuario
        cursoNuevo.innerHTML = categoria;
        // le agrego el nodo creado como hijo de la lista
        listarLibrerias.appendChild(cursoNuevo);

    }
});
btnEliminar.addEventListener('click', function () {
    //elimino de las listaTreas desde el ultimo elemento hasta el primero.
    listarLibrerias.removeChild(listarLibrerias.lastChild);

});