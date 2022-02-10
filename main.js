// const cargarPersonaje = (personaje) => {
//     console.log(fetch('personajes.json'))
// }

function cargarPersonaje(){
    // el método fetch nos retornará una promesa ('resolved', cuando es aceptada)
    fetch('personajes.json')
        .then(respuesta => respuesta.json()) // Indicamos el formato en el que se desea obtener la información
        // .then(usuarios => console.log(usuarios))
        .then(usuarios => {
            usuarios.forEach(usuario => {
                console.log(usuario); 
                const contenedor = document.createElement('div')

            });
        }) // Mostramos la información       
}

cargarPersonaje();