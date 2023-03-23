import * as readlineSync from "readline-sync";
let usuario: string = ""
let contraseña: string= ""
usuario = readlineSync.question("ingrese su nombre de usuario:")
contraseña = readlineSync.question("Ingrese su contraseña:")
let usuarioCorrecto: boolean = usuario == "Juan"
let contraseñaCorrecta: boolean = contraseña == "claveJuan"
if (usuarioCorrecto && contraseñaCorrecta) {
    console.log("usted se ha logueado correctamente")
} else {
console.log("el nombre de usuario o contraseña son incorrectos")
};