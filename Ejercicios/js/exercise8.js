//8. Crear un programa que determine si un número introducido en un Prompt es divisible
//por 5 o no, mostrar el resultado con console.log.

const numero_usuario = prompt('Ingrese un numero');

if (numero_usuario%5 === 0) {
    console.log(`El ${numero_usuario} es divisible por 5`);
}else{
    console.log(`El ${numero_usuario} NO es divisible por 5`);
}