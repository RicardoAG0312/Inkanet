let scrollInicial = window.pageXOffset; //Devuelve los pixeles iniciales del scroll
window.onscroll = () => { //Creamos la funcion
    let scrollFinal = window.pageYOffset; //Devuelve los pixeles que vamos bajando o subiendo
    if (scrollInicial > scrollFinal) {
        document.getElementById("navbar").style.top = "0"; //Si scrollinicial es mayor al final la barra se queda quieta
    } else {
        document.getElementById("navbar").style.top = "-80px"; //Si scrollFinal es mayor al inicial la barra se oculta
    }
    scrollInicial = scrollFinal;
}
