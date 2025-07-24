let edadUsuario = 17;
let EdadMinimaVoto = 18;

let puedevotar = edadUsuario >= EdadMinimaVoto;
let esMenorEdad = edadUsuario >= 18;

console.log("Edad del usuario:", edadUsuario);
console.log("puede  votar: ", puedevotar);
console.log("el usuario es menor: ", esMenorEdad)


let cantidadComprada = 0;
let descuentoPorcentaje = 0;

if (cantidadComprada > 100) {
  descuentoPorcentaje = 20
  console.log("Tu descuento es", descuentoPorcentaje)
} else if (cantidadComprada > 50) {
  descuentoPorcentaje = 15
  console.log("Tu descuento es", descuentoPorcentaje)
} else if (cantidadComprada > 20) {
  descuentoPorcentaje = 10
  console.log("Tu descuento es", descuentoPorcentaje)
} else {
  descuentoPorcentaje < 20
  console.log("Lamentablemente no obtuviste descuento")
}
console.log("Fin del calculo")