const enviarDatos = (event) => {
    event.preventDefault(); 
    let nombreIngresado = document.getElementById("nombre").value;
    let emailIngresado = document.getElementById("email").value;
    let celularIngresado = document.getElementById("celular").value;
    let comentarioIngresado = document.getElementById("comentario").value;
    if (nombreIngresado === "" || emailIngresado === "" || celularIngresado === "" || comentarioIngresado === "") {
        Swal.fire({
            title: "Información Incompleta",
            text: "Para proceder con la solicitud de información se debe completar todos los campos",
            icon: "warning"
        });
    } else {
        Swal.fire({
            title: "Información enviada con éxito",
            text: "Nos pondremos en contacto contigo lo más pronto posible.",
            icon: "success"
        });
        document.getElementById("nombre").value = "";
        document.getElementById("email").value = "";
        document.getElementById("celular").value = "";
        document.getElementById("comentario").value = "";
    }
}
