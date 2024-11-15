//11. Determinar si una palabra empieza con mayúscula o no.

const palabra = prompt('Ingrese una palabra');

if (palabra.charAt(0) === palabra.charAt(0).toUpperCase()) {
    console.log(`La palabra ${palabra}, si empieza con mayuscula`);
}else{
    console.log(`La palabra ${palabra}, no empieza con mayuscula`);
}