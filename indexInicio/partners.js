//Indice inicial
let indice = 0;
//Arreglo con las imagenes
let imagenes = [
    "images/Barracuda.png", "images/CheckPoint.png", "images/Cisco.png", "images/Dell.png",
    "images/ForcePoint.png", "images/Fortinet.png", "images/GFISoftware.png", "images/Hillstone.png",
    "images/Kaspersky.png", "images/Nessus.png", "images/NetWorks.png", "images/PaloAlto.png", "images/Sophos.png"
];
//Funcion MostrarImagenes
let mostrarImagenes = () => {
    let carrusel = document.getElementById("carusel"); //Creamos una variable y llamamos el ID del elemento HTML
    carrusel.innerHTML = "";
    for ( let i = 0; i < 4; i++ ) { //Ciclo for para iterar
        let div = document.createElement("div"); //Creamos un nuevo div
        div.className = "col col-carusel"; //Asignamos la clase que tendra ese div creado
        let img = document.createElement('img'); //Creamos una nueva imagen
        img.src = imagenes[(indice + i) % imagenes.length]; //Asignamos un source a la imagen creada
        img.className = "d-inline-block"; //Asignamos la clase que tendra esa imagen creada
        carrusel.appendChild(div); //Agregamos un hijo (child) que fue ese div creado y lo agregamos al carrusel
        div.appendChild(img); //Agregamos un hijo (chil) que fue esa imagen creada y lo agregamos al div
    }
}
//Eventos y funcion para la flecha derecha
let flechaDerecha = () => { 
    indice = (indice + 1) % imagenes.length;
    mostrarImagenes(); //Llamos la funcion mostrarImagenes
}
document.getElementById("flecha-der").addEventListener("click", flechaDerecha) //Asignas el evento
//Eventos y funcion para la flecha izquiera
let flechaIzquierda = () => {
    indice = (indice - 1 + imagenes.length) % imagenes.length;
    mostrarImagenes(); //Llamos la funcion mostrarImagenes
}
document.getElementById("flecha-izq").addEventListener("click", flechaIzquierda) //Asignas el evento

setInterval(flechaDerecha, 1000);