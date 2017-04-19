var botonesCerrar=document.getElementsByClassName("cerrar");
var botonRestaurar = document.getElementById("restaurar");
var botonExtincion = document.getElementById("extincion");
var botonOrigen = document.getElementById("origen");

for (var i=0;i<botonesCerrar.length;i++){
  botonesCerrar[i].addEventListener("click", function(){cerrarImagenes(this)});
}
botonRestaurar.addEventListener("click",restaurarFotos);
botonExtincion.addEventListener("click",ocultarTextoExtincion);
botonOrigen.addEventListener("click",ocultarTextoOrigen);

function cerrarImagenes(esto){
  //en esta funcion hacemos que se oculte cada imagen.
  esto.parentNode.style.display="none";
}

function restaurarFotos(){
  //en esta funcion restauramos todas la imagenes eliminadas.
  var restaurarDiv=document.getElementsByClassName("imagenPanda");
  var longitud =restaurarDiv.length;
  console.log(longitud);
  for(var j=0;j<longitud;j++){
    restaurarDiv[j].style.display="inline-block";
  }
}

function ocultarTextoExtincion(){
  //esta funcion oculta y muestra el texto de extincion
  var textoExtincion = document.getElementById("textoExtincion");
  console.log(textoExtincion);
  if(textoExtincion.style.visibility==="hidden"){
    textoExtincion.style.visibility="visible"
  }else {
    textoExtincion.style.visibility="hidden"
  }
}

function ocultarTextoOrigen(){
  //esta funcion oculta y muestra el texto de Origen
  var textoOrigen = document.getElementById("textoOrigen");
  console.log(textoOrigen);
  if(textoOrigen.style.visibility==="hidden"){
    textoOrigen.style.visibility="visible"
  }else {
    textoOrigen.style.visibility="hidden"
  }
}
