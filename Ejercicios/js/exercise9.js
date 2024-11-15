/*Crear un programa que determine si un string introducido por un usuario inicia con un
número o con una letra*/

const input = prompt("Introduce un string:");

const primerCaracter = input.charAt(0);

if (primerCaracter >= '0' && primerCaracter <= '9') {
    console.log("El string comienza con un número.");
} else if ((primerCaracter >= 'a' && primerCaracter <= 'z') || (primerCaracter >= 'A' && primerCaracter <= 'Z')) {
    console.log("El string comienza con una letra.");
} else {
    console.log("El string no comienza ni con un número ni con una letra.");
}
