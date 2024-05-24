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
        nuevoPrimerParrafo.innerText = "Inkanet Perú S.A.C. es una empresa 100% de capital peruano, actualmente es una empresa de ciberseguridad con reconocimiento de las mejores marcas y personal calificado para la atención de las mismas.";
        nuevoColTexto.appendChild(nuevoPrimerParrafo);
        let nuevoSegundoParrafo = document.createElement("p");
        nuevoSegundoParrafo.innerText = "Inkanet Perú viene brindando servicios para diferentes entidades de gobierno y privado a nivel nacional, teniendo así una gran cartera de clientes y experiencia en despliegues masivos de las soluciones de protección al usuario final.";
        nuevoColTexto.appendChild(nuevoSegundoParrafo);
        let nuevoTercerParrafo = document.createElement("p");
        nuevoTercerParrafo.innerText = "Es ahí donde encuentra la necesidad de no solo ser una empresa que da servicios de ciberseguridad, sino también de ofrecer servicios personalizados y acordes a la necesidad del cliente. Seguro y de rápida respuesta ante cualquier incidente.";
        nuevoColTexto.appendChild(nuevoTercerParrafo);
        let nuevoCuartoParrafo = document.createElement("p");
        nuevoCuartoParrafo.innerText = "Actualmente, Inkanet Perú cuenta ya con clientes que han confiado en esta nueva era de ciberseguridad, donde no solo será una venta sino una experiencia en servicio y atención, donde el cliente tendrá toda la asesoría y seguimiento de sus puntos críticos en ciberseguridad.";
        nuevoColTexto.appendChild(nuevoCuartoParrafo);
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
        tercerTextoVision.innerText = "Nuestro compromiso inquebrantable es proporcionar una experiencia optimizada tanto para los administradores de redes como para sus usuarios. Centramos todas nuestras acciones en nuestros clientes, los arquitectos y operadores de redes, para garantizar que sus usuarios finales.";
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

