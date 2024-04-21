const enviarDatos = (event) => {
    console.log("La función enviarDatos se ha llamado");
    event.preventDefault(); 
    let nombreIngresado = document.getElementById("nombre").value;
    let emailIngresado = document.getElementById("email").value;
    let celularIngresado = document.getElementById("celular").value;
    let comentarioIngresado = document.getElementById("comentario").value;

    if (nombreIngresado === "" || emailIngresado === "" || celularIngresado === "" || comentarioIngresado === "") {
        alert("Todos los campos deben estar llenos");
    } else if (isNaN(celularIngresado)) {
        alert("El campo de número no debe contener letras");
    } else {
        Swal.fire({
            title: "Información enviada con éxito",
            text: "You clicked the button!",
            icon: "success"
        });
        document.getElementById("nombre").value = "";
        document.getElementById("email").value = "";
        document.getElementById("celular").value = "";
        document.getElementById("comentario").value = "";
    }
}
