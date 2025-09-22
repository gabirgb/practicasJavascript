//ARRAYS
// El array puede guarda2 2 cosas: o propiedades, o conjuntos de valores
// Los arrays deben ser homogeneos, deben contener siempre el mismo tipo de datos: o propiedades (funciones, objetos, array de objetos, promises - las propiedades son mutables a pedar de que el array sea una CONST), o conjuntos de valores (string || number || boolean, pero no mezclados -una vez seteado el tipo de valor este se "bloquea" y no lo podemos/debemos cambiar)
// no es limitante técnico sino convencion y sentido comun.
// Agrupa datos con algo en comun entre si, y los valores deben ser similares en su significado
// el nombre suele ser eso en comun y SIEMPRE en plural
// se declara como una CONST y lo q te dice q es un array es que lleva corchetes


const jugadores = ["messi", "lautaro martinez", "dibu martinez", "cuti romero", "leandro paredes"]
console.log(jugadores)
console.log(jugadores[1]) // para consultar 1 posicion del array, recordar q siempre empieza a contar desde 0

//METODOS DEL ARRAY

// .length() -> para saber el largo del array
console.log(jugadores.length)

// .push() -> agrega un elemento al FINAL del array
jugadores.push("dybala")

// .pop() -> quita un elemento del FINAL del array
jugadores.pop() //saca a dybala

// .unshift() -> para agregar un elemento al PRINCIPIO del array, ojo que cambia todas las posiciones del array -> justamente por esto es que casi nunca se usa...
jugadores.unshift("julian alvarez")

// .shift() -> quita un elemento del PRINCIPIO del array, ojo que cambia todas las posiciones del array -> justamente por esto es que casi nunca se usa...
jugadores.shift() //saca a julian

// .splice() -> agrega, quita o reemplaza un elemento que yo le indique donde yo le indique, puede tomar hasta 3 val por parametro, necesita minimo 2 para funcionar
// el 1er val del param es el indice a partir del que arranca a borrar, si no le pongo otro val como stop ME BORRA TODO
// el 2do val del param es la cantidad de elementos q borra
// el 3er val del param es un val a insertar

// jugadores.splice(2) -> borra todo desde el indice 2 en adelante
jugadores.splice(2, 1) // "a partir del indice 2, eliminá 1 elemento" - cambia el orden del array, no se usa casi nunca
jugadores.splice(2, 1, "simeone") // "a partir del indice 2, eliminá 1 elemento e inserta una nuevo con el val 'simeone'" - el reemplazo de valores del array es para lo que mas se usa el método .splice() 
jugadores.splice(2, 0, "simeone") // "a partir del indice 2, no borres ningun elemento e inserta una nuevo con el val 'simeone'"  - cambia el orden del array, no se usa casi nunca


// .includes() -> boolean, boosca un elemento dentro del array y si lo encuenta deveulve true, sino false
console.log(jugadores.includes("messi"))

// .indexOf() -> devuelve el num del indice del elemento consultado, si no lo encuentra devuelve -1
console.log(jugadores.indexOf("julian alvarez"))

// .sort() -> ordena alfabeticamente el array
jugadores.sort()

// .reverse() -> invierte el orden del array. si el array estaba previamente ordenado alfabeticamente, los ordena en orden inverso.
jugadores.reverse()

// los metodos .reverse() y sort() se pueden concatenar
jugadores.sort().reverse()

// .join() -> nos permite insertar un string entre medio de los elementos del array
// se lo usa mas q nada para visualizacion del array en el html, no tiene mucho sentido mas alla de eso
console.log(jugadores.join(" - "))

// funciones de orden superior: ni .map() ni .filter() los vamos a ver ahora, los vemos mas adelante....

// para recorrer arrays no usar el for + .length porque es horriblaaa
// usar for-of porque es una estructura pensada especificamente para esto

for (const jugador of jugadores){ //el for toma que la const declarada como param corresponde a cada elemento del array con el q debe iterar, por eso podemos usar un juego de nomenclaruta usando los arrays en plural y luego llamamos a esta const como el singular, es mucho muy intuitivo
    console.log("nombre del jugador: "+jugador)
}



// INTRODUCCION A  OBJETOS
// javascript: programacion funcional (no es programacion orientada a objetos)
// la consola se muestra luego de todos los prompt y alert, es el comportamiento por defecto del navegador. 

// Botella de Gabi: violeta, de 500cc, plastico, no retornable, tapa a rosca, boca ancha
// Los objetos, a diferencia de los arrays, tienen diferentes tipos de valores (strings, numbers, booleans)
// Se declaran con CONST, se escriben con llave y los parametros son separados por "," 

const botella = {
    color: "violeta",
    capacidad: 500,
    material: "plastico",
    retornable: false,
    tapa: "rosca",
    boca: "ancha"
}
