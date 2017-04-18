var botonesCerrar=document.getElementsByClassName("cerrar");
var botonRestaurar = document.getElementById("restaurar");

for (var i=0;i<botonesCerrar.length;i++){
  botonesCerrar[i].addEventListener("click", function(){cerrarImagenes(this)});
}
botonRestaurar.addEventListener("click",restaurarFotos);

function cerrarImagenes(esto){
  // var imagenPanda=document.getElementsByClassName('imagenPanda');
  // console.log(imagenPanda);

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
