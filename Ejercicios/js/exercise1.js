//1. Escriba un programa que pida dos números y escriba en la consola cuál es el mayor.
const primer_numero = prompt("Ingrese el primer numero");
const segundo_numero = prompt("Ingrese el segundo numero");

if (primer_numero > segundo_numero) {
    console.log(`El numero mayor es: ${primer_numero}`);
}else if (segundo_numero > primer_numero) {
    console.log(`El numero mayor es: ${segundo_numero}`);
} else {
    console.log("Los numeros ingresados son iguales");
}