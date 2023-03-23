import * as rls from "readline-sync";
const precio: number = rls.questionFloat("Ingrese el precio del producto: ");
const porcentajeDeDescuento: number = 0.1;
const descuento: number = precio * porcentajeDeDescuento;
const precioConDescuento: number = precio - descuento;
console.log("El precio con el descuento es: ", precioConDescuento);


