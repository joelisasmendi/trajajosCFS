import * as rls from "readline-sync";
const tiempoVuelta1: number = rls.questionFloat ("ingrese el tiempo de la vuelta 1 ")
const tiempoVuelta2: number = rls.questionFloat ("ingrese el tiempo de la vuelta 2 ")
const tiempoVuelta3: number = rls.questionFloat ("ingrese el tiempo de la vuelta 3 ")
const tiempoVuelta4: number = rls.questionFloat ("ingrese el tiempo de la vuelta 4 ")
const tiempototal: number = tiempoVuelta1+tiempoVuelta2+tiempoVuelta3+tiempoVuelta4
const promediodevueltas: number = (tiempoVuelta1+tiempoVuelta2+tiempoVuelta3+tiempoVuelta4)/4
console.log("el tiempo total es:",tiempototal);
console.log("el promedio de vuelta es:",promediodevueltas)
