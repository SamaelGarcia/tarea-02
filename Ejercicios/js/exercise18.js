/*18. Todos los ejercicios de while anteriores los debe replicar con el ciclo for.
*/

/*13. Usando while mostrar todos los números de 1 a n aumentando de 1 en 1 donde n lo
ingresa el usuario en un prompt

const num_usuario = parseFloat(prompt('Ingrese hasta donde quiere generar numeros'));
let i = 1;
while (i <= num_usuario) {
    console.log(i);
    i++;
}*/

//13
const num_usuario = parseFloat(prompt('Ingrese hasta donde quiere generar numeros'));
for (let i = 1; i <= num_usuario; i++) {
    console.log(i);
}

/*14. Usando while mostrar todos los números de 1 a N aumentando de 2 en 2 donde n lo
ingresa el usuario en un prompt.

const num_usuario = parseFloat(prompt('Ingrese hasta donde quiere generar numeros'));
let i = 1;
while (i <= num_usuario) {
    console.log(i);
    i=i+2;
}*/
//14
const num_usuario2 = parseFloat(prompt('Ingrese hasta donde quiere generar numeros'));
for(i=1; i < num_usuario2; i+=2) {
    console.log(i);
    }

/*15. Usando while mostrar todos los números de N a 1 disminuyendo de 1 en 1 donde n lo
ingresa el usuario en un prompt.

const num_usuario = parseFloat(prompt('Ingrese el valor superior N'));

let i= num_usuario;

while (i>=0) {
    console.log(i);
    i--;
}*/
//15
const num_usuario3 = parseFloat(prompt('Ingrese el valor superior N'));
for(i=num_usuario3; i >= 0; i--) {
    console.log(i);
    }

/*16. Usando while, solicitar al usuario un número y utilizando console.log para mostrar la
tabla del número hasta 12.

const num_usuario = parseFloat(prompt('Ingrese un numero'));

let i = 1;

while (i <= 12) {
    console.log(`${num_usuario} x ${i} = ${num_usuario*i}`);
    i++;

}*/

const num_usuario4 = parseFloat(prompt('Ingrese un numero'));
for(i = 1; i <= 12; i++) {
    console.log(`${num_usuario4} x ${i} = ${num_usuario4*i}`);
    }

/*17. Usar while, realizar la suma de todos los números pares entre N y M donde N y M los
ingresa un usuario.


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
*/

const num_N = parseFloat(prompt('Ingrese el intervalo inferior (N)'));
const num_M = parseFloat(prompt('Ingrese el intervalo superior (M)'));
let i = num_N;
let suma = 0;
for(i = num_N; i <= num_M; i++) {
    if (i%2 === 0) {
        console.log(`${i} es un numero par`);
        suma = suma + i;
        }
        }
