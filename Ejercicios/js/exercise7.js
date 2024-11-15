//7. Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en la consola.

const numero_usuario = prompt('Ingrese un numero');

if (numero_usuario%2 ===0) {
    console.log(`El numero ${numero_usuario} es par`);
} else {
    console.log(`El numero ${numero_usuario} no es par`);
}