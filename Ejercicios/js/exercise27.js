/*27. Crear una función que reciba un arreglo con números y devuelva un nuevo arreglo con
solo los números pares, pista: utilizar reduce().*/

function numeros_pares (array2){
    console.log(array2);
    return array2.reduce((acumulador, elemento) => {
        if (elemento % 2 == 0) {
            acumulador.push(elemento);
        }
        return acumulador;
        }, []);
}

let array = [1, 2, 3, 4, 5, 6, 7]
let pares = numeros_pares(array);

console.log(pares);

