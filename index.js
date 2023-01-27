$botonEcommerce = document.querySelector("#boton-ecommerce");
$botonClima = document.querySelector("#boton-clima");
$botonMusica = document.querySelector("#boton-musica");

$botonEcommerce.onclick = function(evento){
    document.querySelector("#display-ecommerce").className = "";    
}

$botonClima.onclick = function(evento){
    document.querySelector("#display-clima").className = "";
}

$botonMusica.onclick = function(evento){
    document.querySelector("#display-musica").className = "";
}