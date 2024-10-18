/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.youtube.com/live/euVbF1eatEY?si=nHS3QznAlA_C39NK&t=808
*/

// 1. Escribe un comentario en una línea

// Esto es un comentario.

// 2. Escribe un comentario en varias líneas

/*Esto es un comentario 
de varias lineas*/ 

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

var myVar = "Var ya no se usa"

let myNumber = 10  
let myText = "Hola JavaScript"
let myBoolean = true
let myDouble = 3.10
let myNull = null
let myUndefined
let myBigNumber = 223193129381n
const pi = 3.14  //no mutable

// 4. Imprime por consola el valor de todas las variables

console.log(myNumber);
console.log(myText);
console.log(myBoolean);
console.log(myDouble);
console.log(myNull);
console.log(myUndefined);
console.log(myBigNumber);
console.log(pi);

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof myVar);
console.log(typeof myNumber);
console.log(typeof myText);
console.log(typeof myBoolean);
console.log(typeof myDouble);
console.log(typeof myNull);
console.log(typeof myUndefined);
console.log(typeof myBigNumber);
console.log(typeof pi);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

myVar = "Ahora ya se usa menos"
myText = "Hey"
myBoolean = false
myNumber = 5

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo®

myVar = 3
myText = 10
myBoolean = "hola"
myNumber = "Mi número"

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const myConstNumber = 3.14
const myConstText = "id"
const myConstBoolean = true
console.log(myConstNumber);
console.log(myConstText);
console.log(myConstBoolean);

// 9. A continuación, modifica los valores de las constantes

// dan error, no se pueden modificar

// myConstBoolean = false
// myConstNumber = "se cambia?"
// myConstText = 19


// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

console.log(myConstBoolean);
console.log(myConstText);
console.log(myConstNumber);