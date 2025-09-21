// las variables siembre con "let".
let materia = "javascript" // var de texto
let comision = 80805 // var numerica
let flex = true //var booleano

// console.log() -> me muestra en la consola lo que yo ponga entre parentesis
console.log(materia)
console.log(comision)
console.log(flex)
console.log(flex+" "+materia)

// prompt se usa para pedirle info al usuario.
//OJO, el promt siempre convierte todos los datos ingresados a string
let fecha = prompt("Ingrese la fecha de hoy")
let dia = prompt("ingrese el nombre del día")
let mes = prompt("Ingrese el mes")
let anio = prompt("ingrese el año")

// alert se usa para mostrar la respuesta en unmensajito del nav
alert("Hoy es "+dia+" "+fecha+" de "+mes+" del año "+anio)
console.log(fecha+anio)

//para convertir a numero los valores del promtp, deno parsearlos
let nacimiento= parseInt(prompt("Ingrese su año de nacimiento"))
let anio_actual= parseInt(prompt("Ingrse el año actual"))
let edad= anio_actual - nacimiento
alert("usted tiene "+edad+" años")

//las constantes se declaran con const y su valor nunca cambia luego de ser inicializado
// let nombre -> declaracion
// let nombre = "Pepito" -> declaracion e inicializacion
// null: representa un valor nulo.
// undefined: indica que una variable no tiene asignado un valor. 