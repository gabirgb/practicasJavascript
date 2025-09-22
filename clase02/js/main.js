// CONDICIONALES (if, else if, else)
let validar = false
if (validar) {
    console.log("El valor es verdadero")
}
//el else es opcional
//logicamente, pueden haber tantos else if como se quieran o lo que de el cpu, pero como buena practica, no se recomienda mas de 3: if, else if, y else final.

let fruta = "manzana"

if (fruta == "frutilla") {
    console.log("probablemente sea primavera")
} else if (fruta == "mandarina") {
    console.log("probablemente sea otoño")
} else {
    console.log("no se que epoca del año es")
}

//operadores logicos: && (and), || (or), ! (not), >= (diferente), <= (menor o igual), > (mayor que), < (menor que), == (igualdad), === (igualdad estricta, compara valor y tipo de dato)

// CICLOS (for, while, do while)
// FOR (desde; hasta; actualizacion){ bloque de codigo a ejecutar }
// El FOR corta solo al cumplir la condicion
//el ciclo for inicia su var local (i como convencion, viene de "indice") en el num que yo quiera, por defecto es cero. Como en este for vamos a pedirle a la consola que muestre numeros del 1 al 10, no tiene sentido que inicie en 0 porque nos mateariamos al pedo, entonces iniciamos en 1.
//mi punto de freno en el loop es 10 asi que lo que el for va a estar checkeando todo el tiempo es q la var sea menos o = q 10.
// ademas, el incremento lo hago de 1 en 1 (i++) porque quiero ver todos los num del 1 al 10, si fuese otro caso en donde no necesito pasar por todos los ciclos, puedo cambiar la forma de incrementar. Por ej si pongo "i+=2" significa que va de 2 en 2.
// en cada ciclo la var i se actualiza y cambia de valor 
for (let i=1; i<=10; i++) {
    console.log(i)
}

//tabla del 15

let numero = parseInt(prompt("Ingrese el número que quiere"))
console.log("tabla de multiplicar del número "+numero)

for (let i=1; i<=15; i++){
    let resultado = i*numero
    console.log(numero+"x"+i+": "+resultado)
}

//Cuenta regresiva, donde podríamos el "despegue"??
//si lo ponemos dentro del ciclo, forma parte de la iteracion y aparece repetido multiples veces.
for (let i=10; i>=0; i--){
    console.log(i)
    console.log("despegue!")
}

//si lo ponemos por fuera funciona
for (let i=10; i>=0; i--){
    console.log(i)
}
console.log("despegue!")

//pero que pasa si por A o B el ciclo se rompe? por ej:
for (let i=10; i>=0; i--){
    console.log(i)
    if (i===2){
        console.log("Abortemos!!")
        break //el "break" es el equivalente al "!important" en css cuando queremos forzar algo: es porque hay algo q no está bien codeado y necesitamos q el navegador nos ponga atencion ahi. hay excepciones, como en los switch case. acá solo lo usamos a fines ilustrativos
    }
}
console.log("despegue!")

//entonces lo correcto es ponerlo dentro del ciclo pero con un if
for (let i=10; i>=0; i--){
    console.log(i)
    if(i===0){
        console.log("Despeguemos!")
    }
}


//While -> CICLO. se ejecuta forever and ever hasta q YO le cambie el condicional. NO SE PONE BREAK!

let continuar = true

while (continuar){
    let numero = parseInt(prompt("Ingrese el número que quiere"))
    console.log("tabla de multiplicar del número "+numero)

    for (let i=1; i<=15; i++){
        let resultado = i*numero
        console.log(numero+"x"+i+": "+resultado)
    }

    let confirmacion = prompt("desea hacer otro calculo? si/no").toLowerCase() //el metodo .toLowerCase convierte todo a minuscula, y asi minimizo margen de error por el imput del usuario
    //ademas, el prompt tiene por defecto el boton "cancelar", que tiene valor "null" (no es ni verdadero ni falso), el script intentará seguir ejecutandose.
    if (confirmacion== "no"){
        continuar = false
        console.log("gracias!")
    }
}

// Switch-case -> condicional. Eecuta TODO lo que hay desde el punto en el que ingresa para abajo, salvo que lo frenemos al fin de cada case. Es en el unico caso donde se utiliza un break. Despues del default no hace falta porque despues no hay mas nada...
// La idea es que el case solo tenga las llamadas a las funciones asi queda cortito y legible, sino pasa igual que con los if/else q se llenan de código kilometrico.

let menu = parseInt(prompt("Ingrese 1 para ver su cuenta, 2 para extraccion, 3 para deposito, otro numero para salir"))

switch (menu){
    case 1: 
        console.log("Total de la cuenta $1000")
        break
    case 2: 
        console.log("Limite para la extraccion $3000")
        break
    case 3:
        console.log("limite de deposito $10000")
        break
    default:
        console.log("retire su tarjeta")
}


// ahora todo junto

let continuarB = true

while (continuarB) {
    let menu = parseInt(prompt("Ingrese 1 para ver su cuenta, 2 para extraccion, 3 para deposito, otro numero para salir"))

    switch (menu){
        case 1: 
            console.log("Total de la cuenta $1000")
            break
        case 2: 
            console.log("Limite para la extraccion $3000")
            break
        case 3:
            console.log("limite de deposito $10000")
            break
        default:
            console.log("Opcion incorrecta")
    }

    let confirmacion = prompt ("Desea hacer otra consulta? si/no").toLowerCase()

    if (confirmacion == "no"){
        continuarB = false
        console.log("gracias vuelva prontos")
    }
}