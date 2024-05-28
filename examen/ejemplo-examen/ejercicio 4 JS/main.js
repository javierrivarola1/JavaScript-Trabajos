// document.querySelector()

let usuarios = [];
let formRegistro = document.getElementById("form_registro");
formRegistro.addEventListener("submit", () => //Extraer datos del formulario, botones / funcionalidad.

{ event.preventDefault()    
    const nombre = document.getElementById("nombre").value; 
const dni = document.getElementById("dni").value; 
const edad = document.getElementById("edad").value;

if (edad > 18) {
    let persona = {nombre: nombre, dni: dni, edad: edad} //el nuevo usuario que vamos a cargar, cumpliendo la condición
   cargarUsuario(persona); 
}
else { console.log("Edad no valida");}
}
)

//Primer punto.
function cargarUsuario(personas) {
    usuarios.push(personas); //Se lleva el nuevo objeto (usuario mayor de edad) a la array.
}

let btnSortear = document.getElementById("btn_sortear");

btnSortear.addEventListener ("click", mostrarUsuario);


const tabladeUsuarios = document.getElementById("lista_sorteo");

//Segundo punto.
function mostrarUsuario() { 
    tabladeUsuarios.innerText = ""
    for (let i = 0; i < usuarios.length; i++) {
        const listadoNombre = document.createElement("li"); // creas la etiqueta LI en JS
        listadoNombre.innerText = "Nombre" + usuarios[i].nombre + "Dni" + usuarios[i].dni  // se pone i dentro de la Array por el for, que es el que recorre.
        tabladeUsuarios.appendChild(listadoNombre); //hijo de la tabla de usuarios. Primer elemento.
    } usuarioRandom();
}

function usuarioRandom() {
    let limiteMaximodeUsuarios = usuarios.length -1;
    const usuarioGanador = Math.floor(Math.random() * (limiteMaximodeUsuarios - 0)) + 0; //Se busca de manera aleatoria el usuario que puede ganar el sorteo. con Maximos y Minimos.
    mostrarGanador(usuarioGanador);
}


const avisoGanador = document.getElementById("aviso_ganador");

function mostrarGanador(usuarioGanador) {
    let ganador = usuarios[usuarioGanador];
    avisoGanador.innerHTML = "El ganador es " + ganador.nombre + " " + ganador.dni + " " + ganador.edad; 
    avisoGanador.style.color = "green";    
}






