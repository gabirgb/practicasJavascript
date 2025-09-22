// FUNCIONES
/* Cada funcion es una partecita de un rompecabezas
Cada partecita hace algo de un todo
Cada f busca realizar una accion/ tarea/ proceso (aunq los procesos pueden repetirse)
A veces toma un rol más bien organizativo
 */

// FUNCION DECLARADA
// function sumar (){
//     let numA = 45
//     let numB = 10
//     let resultado = numA + numB

//     return resultado // el "return" hace que la f devuelva el valor q yo le indique, no importa todo lo q haga adentro la f, solo devuelve el return
// }

// console.log(sumar())

// let calculo = sumar () // tambien puedo guardar la llamada a la f en una variable

// FUNCION EXPRESADA (a veces mal llamada f anonima, que es otra cosa un poco mas pro)
// Son las f q se expresan dentro de una const siempre


//La dif es que javascript carga primero todo lo que diga "function" en la declaracion, no importa el orden en el que esté escrito el código, siempre va a cargar primero las f declaradas (porque sabe q son vitales para el cod). El cabezal hace una 1ra pasada por todo el codigo y luego carga todo lo q dice functiom, esto habilita que se pueda llamar una f incluso antes de ser declarada.
// La funcion expresada viene a subsanar el desorden y la desprolijidad de código que se había generado con las f declaradas. Como javascript no puede llamar algo que no fue instanciado/creado, con esta estructura la f solo puede llamarse luego de haber creado la variable 

// SCOPE
// 
// PARAMETROS 
// Son puentes entre los datos externos e internos de una f
// Cuando declaro una f puedo setear parametros x defecto por las dudas q el usuario no los pase, x ej:
// function devolverLibro(titulo, diasRetraso = 0) {}
// De esta forma si el usuario completa "dias de retraso" el argumento es el que pasa el usuario. Si no, el argumento es cero.
// 
// ARGUMENTOS
// son los valores especificos que se le pasan a los parametros cuando se llama a la f
// 
// function sumarB (numC, numD) {
//     let resultado = numC + numD
//     console.log(resultado)
// }
// sumarB (10, 30)

// FUNCIONES ABREVIADAS
// SOLAMENTE para f EXPRESADA que tienen UN solo param y UNA sola operacion
//Se pasa de esto:

//const multiplicarX5 = function (numE) {
//    let resultado = 5 * numE
//    return resultado
//}

//console.log(multiplicarX5(5))

//A esto:

// const multiplicarX2 = numE => 5*numE
// console.log(multiplicarX2(2))

// el function se reemplaza por la flechita => y se pone a la derecha del unico parametro que se solicita y se eliminan los parentesis. 
// a la derecha de la flecha se pone la unica operacion que se realiza y se eliminan las llaves y el "return"
// esta modalidad de escritura SIEMPRE tiene el return de la operacion implícito
// si la f tiene mas de un param:

// const sumarC = (numD, numE) => numD+numE
// console.log(sumarC(5,10))


//AHORA TODO JUNTO: Calculadora

function sumar () {
    let numeroA = parseInt(prompt("Ingrese el 1er num"))
    let numeroB = parseInt(prompt("Ingrese el 2do num"))
    let suma = numeroA+numeroB
    alert("La suma de "+numeroA+" más "+numeroB+" es: "+suma)
}


function restar () {
    let numeroA = parseInt(prompt("Ingrese el 1er num"))
    let numeroB = parseInt(prompt("Ingrese el 2do num"))
    let resta = numeroA-numeroB
    alert("La resta de "+numeroA+" menos "+numeroB+" es: "+resta)
}


function multiplicar () {
    let numeroA = parseInt(prompt("Ingrese el 1er num"))
    let numeroB = parseInt(prompt("Ingrese el 2do num"))
    let multiplo = numeroA*numeroB
    alert("El múltiplo de "+numeroA+" por "+numeroB+" es: "+multiplo)
}


function dividir () {
    let numeroA = parseInt(prompt("Ingrese el 1er num"))
    let numeroB = parseInt(prompt("Ingrese el 2do num"))
    let division = numeroA/numeroB
    alert("El cociente de "+numeroA+" dividido "+numeroB+" es: "+division)
}


let menu = parseInt(prompt("Elija la operacion: \n 1- Sumar \n 2- Restar \n 3- Multiplicar \n 4- Dividir \n 5- Salir"))
while (menu !== 5) {
    switch (menu) {
        case 1:
            sumar()
            break
        case 2:
            restar()
            break
        case 3:
            multiplicar()
            break
        case 4:
            dividir()
            break
        default:
            alert("Opcion invalida")
            break
    }
    menu = parseInt(prompt("Elija la operacion: \n 1- Sumar \n 2- Restar \n 3- Multiplicar \n 4- Dividir \n 5- Salir"))
}
alert("Gracias!")

