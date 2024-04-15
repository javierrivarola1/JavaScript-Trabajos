// import { alerta } from "./funciones/alerta_Ej1.js";





// alerta()


/* const texto = document.getElementById("texto")

const btn1 = document.getElementById("botonMostrar")

const btn2 =document.getElementById("botonMostrar2")

const btn3 =document.getElementById("botonMostrar3")


btn1.textContent = "BotonRojo";

btn2.textContent = "BotonVerde";

btn3.textContent = "BotonAzul";



const mostrarBotones = (text) =>{

texto.textContent= `${text} este color fue el ultimo clickeado`;

}

btn1.addEventListener("click", ()=>{mostrarBotones("Rojo")} )
btn2.addEventListener("click", ()=>{mostrarBotones("Verde")} )
btn3.addEventListener("click", ()=>{mostrarBotones("Azul")} )



 */

// Crear un formulario con Nombre, Apellido y un botón Enviar. Al presionar Enviar debe mostrar el nombre y apellido como un título dentro de la página.


const formulario = document.getElementById("formulario");
const titulo = document.getElementById("titulo");

function mostrarTitulo(persona) {
    titulo.textContent = `${persona.nombre} ${persona.apellido}`;
}

formulario.addEventListener("submit", function() {
    
    event.preventDefault(); // Detiene el comportamiento predeterminado del formulario

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;

    const persona = {
        nombre: nombre,
        apellido: apellido
    }

    mostrarTitulo(persona);
});




