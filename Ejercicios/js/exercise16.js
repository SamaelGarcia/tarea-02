/*16. Usando while, solicitar al usuario un número y utilizando console.log para mostrar la
tabla del número hasta 12.*/

const num_usuario = parseFloat(prompt('Ingrese un numero'));

let i = 1;

while (i <= 12) {
    console.log(`${num_usuario} x ${i} = ${num_usuario*i}`);
    i++;

}