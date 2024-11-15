//3. Escriba un programa que pida un número y diga si es divisible por 2.

const numero_usuario = prompt("Ingresa un numero");

if(numero_usuario%2 == 0){
    console.log(`El numero ${numero_usuario} es divisible entre 2`);
}else{
    console.log("No es divisible entre 2");
}