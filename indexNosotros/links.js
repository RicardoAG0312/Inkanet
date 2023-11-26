/* Historia */
document.addEventListener("DOMContentLoaded", function() {
    let historia = () => {
        let seccionExistente = document.querySelector(".sect-historia, .sect-proposito");
        if (seccionExistente) {
            seccionExistente.parentNode.removeChild(seccionExistente);
        }
        let nuevaSection = document.createElement("section");
        nuevaSection.className = "container-fluid sect-historia";
        let nuevoRow = document.createElement("div");
        nuevoRow.className = "row";
        nuevaSection.appendChild(nuevoRow);
        let nuevoColTexto = document.createElement("div");
        nuevoColTexto.className = "col-12 col-md-6 col-xl-6 texto";
        let nuevoColImagen = document.createElement("div");
        nuevoColImagen.className = "col-12 col-md-6 col-xl-6 imagen";
        nuevoRow.appendChild(nuevoColTexto);
        nuevoRow.appendChild(nuevoColImagen);
        let nuevoHeader = document.createElement("header");
        nuevoHeader.className = "titulo-sec";
        nuevoHeader.innerText = "Nuestra Historia";
        nuevoColTexto.appendChild(nuevoHeader);
        let nuevoPrimerParrafo = document.createElement("p");
        nuevoPrimerParrafo.innerText = "Inkanet Perú S.A.C, es una empresa 100% de capital peruano, actualmente reconocida en el campo de la ciberseguridad. Cuenta con el respaldo de las mejores marcas y un personal altamente calificado para atenderlas. Inkanet Perú ha estado brindando servicios a los ISP más reconocidos en el mercado, como Media Commerce, Optical Networks, Nextnet, Yachay, entre otros.";
        nuevoColTexto.appendChild(nuevoPrimerParrafo);
        let nuevoSegundoParrafo = document.createElement("p");
        nuevoSegundoParrafo.innerText = "Identificando la necesidad de no sólo ofrecer servicios de ciberseguridad, sino también de proporcionar un internet seguro y de rápida respuesta en seguridad y servicios añadidos, Inkanet Perú obtuvo el permiso del MTC para el Servicio de Valor añadido y la Distribución y Comercialización de Internet. Ahora, Inkanet Perú se enorgullece de tener clientes que han confiado en esta nueva era del Internet, donde no sólo se trata de una fibra de interconexión o un firewall administrado por un operador, sino de Interconexión y Ciberseguridad (Internet 2.0).";
        nuevoColTexto.appendChild(nuevoSegundoParrafo);
        let contenido = document.getElementById("historia");
        contenido.appendChild(nuevaSection);
    }
    document.getElementById("texto1").addEventListener("click", historia);
});
/* Proposito*/
document.addEventListener("DOMContentLoaded", function() {
    let proposito = () => {
        let seccionExistente = document.querySelector(".sect-proposito, .sect-historia");
        if (seccionExistente) {
            seccionExistente.parentNode.removeChild(seccionExistente);
        }
        let nuevaSection = document.createElement("section");
        nuevaSection.className = "container-fluid sect-proposito";
        let nuevoRow = document.createElement("div");
        nuevoRow.className = "row";
        nuevaSection.appendChild(nuevoRow);
        let nuevoColTexto = document.createElement("div");
        nuevoColTexto.className = "col-12 col-md-6 col-xl-6 texto";
        let nuevoColImagen = document.createElement("div");
        nuevoColImagen.className = "col-12 col-md-6 col-xl-6 imagen";
        nuevoRow.appendChild(nuevoColTexto);
        nuevoRow.appendChild(nuevoColImagen);
        let nuevoHeader = document.createElement("header");
        nuevoHeader.className = "titulo-sec";
        nuevoHeader.innerText = "Nuestro Propósito";
        let primerDivProposito = document.createElement("div");
        let primerTituloProposito = document.createElement("h5");
        primerTituloProposito.innerText = "Propósito:";
        let primerTextoProposito = document.createElement("p");
        primerTextoProposito.innerText = "Nuestro propósito es empoderar a las organizaciones para que prosperen en la era digital con total confianza y resiliencia. Nos dedicamos a crear un entorno cibernético seguro y protegido, donde las empresas pueden aprovechar al máximo las oportunidades tecnológicas sin temor a las amenazas. Nuestra meta es ser un aliado confiable en ciberseguridad, proporcionando soluciones de vanguardia que se adaptan a las necesidades cambiantes del panorama digital.";
        primerDivProposito.appendChild(primerTituloProposito);
        primerDivProposito.appendChild(primerTextoProposito);
        let segundoDivMision = document.createElement("div");
        let segundoTituloMision = document.createElement("h5");
        segundoTituloMision.innerText = "Misión:";
        let segundoTextoMision = document.createElement("p");
        segundoTextoMision.innerText = "Nuestra misión es salvaguardar el mundo digital. Nos esforzamos por proteger y asegurar las redes y sistemas de nuestros clientes contra amenazas cibernéticas, permitiéndoles operar con la máxima eficiencia y tranquilidad. Nuestro objetivo es anticiparnos a los desafíos de seguridad emergentes y proporcionar soluciones proactivas, innovadoras y personalizadas. Estamos comprometidos con la excelencia en la ciberseguridad, poniendo a nuestros clientes en el centro de todo lo que hacemos.";
        segundoDivMision.appendChild(segundoTituloMision);
        segundoDivMision.appendChild(segundoTextoMision);
        let tercerDivVision = document.createElement("div");
        let tercerTituloVision = document.createElement("h5");
        tercerTituloVision.innerText = "Visión:";
        let tercerTextoVision = document.createElement("p");
        tercerTextoVision.innerText = "Nuestro compromiso inquebrantable es proporcionar una experiencia optimizada tanto para los administradores de redes como para sus usuarios. Centramos todas nuestras acciones en nuestros clientes, los arquitectos y operadores de redes, para garantizar que sus usuarios finales - ya sean miembros del equipo en una reunión de Zoom, asociados utilizando escáneres en tiendas o estudiantes en clases virtuales - puedan disfrutar de una experiencia satisfactoria y productiva.";
        tercerDivVision.appendChild(tercerTituloVision);
        tercerDivVision.appendChild(tercerTextoVision);
        nuevoColTexto.appendChild(nuevoHeader);
        nuevoColTexto.appendChild(primerDivProposito);
        nuevoColTexto.appendChild(segundoDivMision);
        nuevoColTexto.appendChild(tercerDivVision);
        let contenido = document.getElementById("proposito-historia");
        contenido.appendChild(nuevaSection);
    }
    document.getElementById("texto2").addEventListener("click", proposito);
});

