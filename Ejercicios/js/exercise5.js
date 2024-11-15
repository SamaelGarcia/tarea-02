//5. Escriba un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales.

const frase = prompt("Ingrese una frase");

let contadorA = 0;
let contadorE = 0;
let contadorI = 0;
let contadorO = 0;
let contadorU = 0;

let frase_mayus = frase.toUpperCase();
console.log(frase_mayus);

for (let i = 0; i < frase_mayus.length; i++) {
    if (frase_mayus[i] === 'A') {
        contadorA++;
    }if (frase_mayus[i] === 'E') {
        contadorE++;
    }if (frase_mayus[i] === 'I') {
        contadorI++;
    }if (frase_mayus[i] === 'O') {
        contadorO++;
    }if (frase_mayus[i] === 'U') {
        contadorU++;
    }
}

/*let vocales = {
    vocal_A : contadorA,
    vocal_E : contadorE,
    vocal_I : contadorI,
    vocal_O : contadorO,
    vocal_U : contadorU,
};

console.log(vocales);*/

console.log(`Cantidad de vocales encontradas:\nVocales A: ${contadorA}\nVocales E: ${contadorE}\nVocales I: ${contadorI}\nVocales O: ${contadorO}\nVocales U: ${contadorU}`);


