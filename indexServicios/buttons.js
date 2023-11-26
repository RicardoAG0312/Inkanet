//Botones Servicios
let botonesServicio = document.querySelectorAll(".padre button");
botonesServicio.forEach(function(boton){
    boton.addEventListener("click", function(){
        botonesServicio.forEach(function(botonActivo){
            botonActivo.classList.remove("active");
        });
        this.classList.add("active");
    });
});


