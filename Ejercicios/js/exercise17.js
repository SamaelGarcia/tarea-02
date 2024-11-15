/*17. Usar while, realizar la suma de todos los números pares entre N y M donde N y M los
ingresa un usuario.
 */

const numero_N = parseFloat(prompt('Ingrese el intervalo inferior (N)'));
const numero_M = parseFloat(prompt('Ingrese el intervalo superior (M)'));

let i = numero_N;
let suma = 0;

while (i<=numero_M) {
    if (i%2 === 0) {
        console.log(`${i} es un numero par`);
        suma = suma + i;
    }
    i++;
}

console.log(`La suma de los numeros pares es igual a: ${suma}`);
