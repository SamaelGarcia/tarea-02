/*29. Crear una función que devuelva el promedio de un arreglo, en caso de que el arreglo este
vacío debe devolver cero.*/

function promedio(arreglo){
    if(arreglo.length == 0){
        return 0;
    }
    let suma = arreglo.reduce((acum, num) => acum + num, 0)
    return suma / arreglo.length;
}

let array = [1, 2, 3, 4, 5];
let arrayVacio = [];

console.log(promedio(array));
console.log(promedio(arrayVacio));


