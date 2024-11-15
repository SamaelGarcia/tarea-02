/*28. Crear una función que reciba un arreglo con palabras, crear un nuevo arreglo que
contenga sólo las palabras que empiezan con una vocal.*/

function Vocales (array){
    let Vocals = ['a', 'e', 'i', 'o', 'u'];
    let palabrasVocales = [];
    for (let i = 0; i < array.length; i++) {
        let palabra = array[i].toLowerCase();
        if (Vocals.includes(palabra[0])) {
            palabrasVocales.push(array[i]);
            }
        }
        return palabrasVocales;
        }

let palabras = ["Uno", "Dos", "Tres", "Ocho", "Once", "Trece"];
console.log(Vocales(palabras));