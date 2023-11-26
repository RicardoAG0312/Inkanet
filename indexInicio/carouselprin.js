let secciones = [
    {
        titulo: "Seguridad Gestionada",
        texto: "Nuestro servicio de soporte ofrece todas las capacidades y experiencia de resolución de incidentes, con una operación 24x7x365, a través de niveles de atención y especialización.",
        imagen: "images/ST.jpg",
        alt: "Seguridad Gestionada",
        fondo: 'imagen-uno'
    },
    {
        titulo: "Transporte de Datos",
        texto: "Planificar y ejecutar proyectos de soluciones en Ciberseguridad, Redes y Comunicaciones y Data Center, usando estándares internacionales como PMI, ITIL, cumpliendo las expectativas de los clientes.",
        imagen: "images/SI.jpg",
        alt: "Transporte de Datos",
        fondo: 'imagen-dos'
    },
    {
        titulo: "Internet Empresarial",
        texto: "Brindamos servicio gestionado de diversas soluciones de nuestro portafolio con la capacidad de operación y soporte con el propósito de atender las diferentes necesidades de administración y gestión de todos los recursos.",
        imagen: "images/SG.jpg",
        alt: "Internet Empresarial",
        fondo: 'imagen-tres'
    }
];
let contador = 0;
let botones = document.querySelectorAll(".circulo");
let cambiarSeccion = () => {
    let seccion = secciones[contador];
    document.querySelector(".sect-principal .row .caja header").innerHTML = seccion.titulo;
    document.querySelector(".sect-principal .row .caja p").innerHTML = seccion.texto;
    let imagen = document.querySelector(".sect-principal .row .imagen img");
    imagen.src = seccion.imagen;
    imagen.alt = seccion.alt;
    let fondo = document.querySelector(".sect-principal .row");
    fondo.className = 'row ' + seccion.fondo;
    botones.forEach(boton => boton.classList.remove('seleccionado'));
    botones[contador].classList.add('seleccionado');
    contador = (contador + 1) % secciones.length;
};
setInterval(cambiarSeccion, 2000);


