/*13. Usando while mostrar todos los números de 1 a n aumentando de 1 en 1 donde n lo
ingresa el usuario en un prompt*/

const num_usuario = parseFloat(prompt('Ingrese hasta donde quiere generar numeros'));
let i = 1;
while (i <= num_usuario) {
    console.log(i);
    i++;
}