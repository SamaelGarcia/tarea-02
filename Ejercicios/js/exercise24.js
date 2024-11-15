/*24. Crear un array vacío, luego generar N números al azar y guardarlos en un array, N es
introducido por el usuario a través de un prompt.
*/

let array = [];
let n = parseInt(prompt("Ingrese el número (N) de elementos para su array: "));
for (let i = 0; i < n; i++) {
    array.push(Math.floor(Math.random() * 100) + 1);
    }
    
// console.log(array);
console.log("Numeros al azar: \n" + array.join(", "));