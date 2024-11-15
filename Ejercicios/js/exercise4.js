// 4. Escriba un programa que pida una frase y escriba cuantas veces aparece la letra a.

const fraseUsuario = prompt("Escriba una frase");

let conteo = 0;

for(let i=0; i < fraseUsuario.length; i++){
    if (fraseUsuario[i] === 'a') {
        conteo++;
    }
}
console.log(`Cantidad de "a" es igual a: ${conteo}.`);