const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault(); 
    if (form) {
        let nombreIngresado = document.getElementById("nombre").value;
        let emailIngresado = document.getElementById("email").value;
        let celularIngresado = document.getElementById("celular").value;
        let comentarioIngresado = document.getElementById("comentario").value;
        const gmailHead = "Información Inkanet Perú";
        const correo = "ventas@inkanetperu.com";
        const gmailBody = `Nombre: ${nombreIngresado}\nCorreo: ${emailIngresado}\nCelular: ${celularIngresado}\nMensaje: ${comentarioIngresado}`;
        const headGmail = encodeURI(gmailHead)
        const bodyGmail = encodeURI(gmailBody);
        const urlGmail = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${correo}&su=${headGmail}&body=${bodyGmail}`;
        window.open(urlGmail, "_blank");
        setTimeout(() => form.reset(), 1000);
        alert("Mensaje enviado con éxito");
    }
});


