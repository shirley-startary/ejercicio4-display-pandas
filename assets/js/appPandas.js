var botonesCerrar=document.getElementsByClassName('cerrar');
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
